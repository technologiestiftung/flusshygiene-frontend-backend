import { ITokenRetrieveOptions, ITokenRequestOpts } from './../common/interfaces/index';
import { NODE_ENV } from './../config';
import rq from 'request-promise-native';
import got, { GotOptions } from 'got';
import fs from 'fs';
import path from 'path';
import { IObject, IDiskToken } from '../common/interfaces';
import { API_HOST, API_MOUNT } from '../config';
import { makeTestRequest } from './make-test-request';
import { removeToken } from './remove-token';
import { retrieveToken } from './retrieve-token';
import { buildTokenHeader } from './build-token-headers';

const tokenReqBody = { "client_id": process.env.AUTH0_CLIENT_ID, "client_secret": process.env.AUTH0_CLIENT_SECRET, "audience": process.env.AUTH0_AUDIENCE, "grant_type": "client_credentials" };
const tokenReqbodyString = JSON.stringify(tokenReqBody);

const optsGetToken: ITokenRequestOpts = {
  url: process.env.AUTH0_TOKEN_REQUEST_URL!,
  body: tokenReqbodyString,
  headers: { 'content-type': 'application/json' },
};

const tokenPath = path.resolve(__dirname, '../../../token.json');

const tokenRetrievalOpts: ITokenRetrieveOptions = {
  tokenPath,
  optsGetToken,
}

export const auth: () => Promise<void> = async () => {
  try {
    let tokenJson = await retrieveToken(tokenRetrievalOpts);
    let tokenObj = JSON.parse(tokenJson);
    let headers = buildTokenHeader(tokenObj);
    const testReqOpts = {
      url: `${API_HOST}/${API_MOUNT}`,
      headers: headers
    };
    let testReqRes = await makeTestRequest(testReqOpts);
    if(testReqRes.statusCode !== 200){
      console.error('token did not work.');
      console.error('removing file');
      await removeToken(tokenPath);
      console.error('getting new one');
      tokenJson = await retrieveToken(tokenRetrievalOpts);
      tokenObj = JSON.parse(tokenJson);
      testReqOpts.headers = buildTokenHeader(tokenObj);
      testReqRes = await makeTestRequest(testReqOpts);
      if(testReqRes.statusCode !== 200){
        console.error('still not working with newly rertieved token???');
      }else{
        console.log(testReqRes.body);
      }
    }else{
      console.log(testReqRes.body);
    }
  } catch (error) {
    throw error;
  }
}

// const tries = 2;
// let triesCounter = 0;

//  const optionsTokenRequest: rq.OptionsWithUrl = {
//   // tslint:disable-next-line: max-line-length
//   body: `{"client_id":"${process.env.AUTH0_CLIENT_ID}","client_secret":"${process.env.AUTH0_CLIENT_SECRET}","audience":"${process.env.AUTH0_AUDIENCE}","grant_type":"client_credentials"}`,
//   headers: { 'content-type': 'application/json' },
//   method: 'POST',
//   url: process.env.AUTH0_REQ_URL!,
//   resolveWithFullResponse: true,
// };

// const gotOptionsTokenRequest = {
//   headers: { 'content-type': 'application/json' },
//   body: `{"client_id":"${process.env.AUTH0_CLIENT_ID}","client_secret":"${process.env.AUTH0_CLIENT_SECRET}","audience":"${process.env.AUTH0_AUDIENCE}","grant_type":"client_credentials"}`,
// };

// const isTokenOutdated: (issuance_ms: number, issuance_duration_ms: number) => boolean = (issuance_ms, issuance_duration_ms) => {
//   const now = new Date();

//   if ((now.getTime() - issuance_ms) < issuance_duration_ms) {
//     return true;
//   }
//   return false;
// }

// const writeTokenToDisk: (filePath: string, dataStr: string) => void = (filePath, dataStr) => {
//   console.info('writing token to disk');
//   fs.writeFileSync(filePath, dataStr);
// }


// export const getNewToken: (filePath: string, opts: rq.OptionsWithUrl) => Promise<void> = async (filePath, opts) => {
//   try {
//     console.error('getting a new token');
//     const response = await got.post(process.env.AUTH0_REQ_URL!, {
//       body: gotOptionsTokenRequest.body,
//       headers: gotOptionsTokenRequest.headers
//     });
//     // const response = await rq(opts);
//     console.error('response o getting a new token', response);
//     if (response.statusCode !== 200) {
//       console.error(response);
//       throw new Error('Status on new token request is not 200');
//     } else {
//       // console.error(response.body);
//       const parsedBody = JSON.parse(response.body);
//       parsedBody.issuance = new Date().getTime();
//       writeTokenToDisk(filePath, JSON.stringify(parsedBody));
//     }
//   } catch (error) {
//     console.error(error.message);
//     throw error;
//   }
// }

// export const checkForToken: (tokenPath: string) => boolean = (tokenPath) => {
//   if (fs.existsSync(tokenPath) === true && fs.lstatSync(tokenPath).isDirectory() === false) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const checkProperties: (obj: IObject) => boolean = (obj) => {

//   const propNames = ['issuance', 'access_token', 'expires_in', 'token_type', 'scope'];
//   let result = true;
//   for (const item of propNames) {
//     result = obj.hasOwnProperty(item);
//   }
//   return result;
// }

// export const auth: () => Promise<Error | IDiskToken> = async () => {
//   try {
//     if (triesCounter >= tries) {
//       console.error('In to many tries');
//       return new Error('To many tries of auth');
//     }

//     // let tokenDoesWork: boolean = false;
//     if (checkForToken(tokenPath) === false) {
//       console.error('did not find token. Get a new one');
//       // does not exists get a new one
//       await getNewToken(tokenPath, optionsTokenRequest);
//       await auth();
//     } else {
//       console.error('got a token file. Reading');
//       const fileContent = fs.readFileSync(tokenPath, 'utf8');
//       let tokenJson: IDiskToken = {};
//       try {
//         tokenJson = JSON.parse(fileContent);
//       } catch (error) {
//         // could not parse JSON token does not work
//         console.error('could not read existing token file');

//         await getNewToken(tokenPath, optionsTokenRequest);
//         await auth();
//       }
//       // does file contain token data?
//       if (checkProperties(tokenJson) === false) {
//         console.error('file has not the props we expected');
//         // get a new one
//         await getNewToken(tokenPath, optionsTokenRequest);
//         await auth();
//       } else {
//         console.error('all the props we need');
//         if (isTokenOutdated(tokenJson.issance!, tokenJson.expires_in!) === true) {
//           console.error('token is expired');
//           await getNewToken(tokenPath, optionsTokenRequest);
//           await auth();
//         }
//         // make test request
//         console.error('making a test request');
//         const options: rq.OptionsWithUrl = {
//           json: {},
//           url: `${API_HOST}/${API_MOUNT}`,
//           method: 'GET',
//           resolveWithFullResponse: true,
//           headers: {
//             'content-type': 'application/json',
//             'Authorization': `${tokenJson.token_type} ${tokenJson.access_token}`
//           }
//         }
//         // const response = await rq(options);
//         const response = await got(`${API_HOST}/${API_MOUNT}`, {
//           headers: {
//             'content-type': 'application/json',
//             'Authorization': `${tokenJson.token_type} ${tokenJson.access_token}`
//           }
//         })
//         triesCounter++;
//         if (response.statusCode !== 200) {
//           console.error('response was not 200');
//           await getNewToken(tokenPath, optionsTokenRequest);
//           await auth();
//         } else {
//           if(NODE_ENV === 'development'){
//             console.info('We have a valid token');
//           }
//           tokenJson.filePath = tokenPath;
//           return tokenJson;
//         }
//       }
//     }
//   } catch (error) {
//     return error;
//   }
// }
