import { ITokenRetrieveOptions, ITokenRequestOpts, IToken } from './../common/interfaces';
import path from 'path';
import { API_HOST, API_MOUNT } from '../config';
import { makeTestRequest } from './make-test-request';
import { removeToken } from './remove-token';
import { retrieveToken } from './retrieve-token';
import { buildTokenHeader } from './build-token-headers';

const tokenReqBody = { 'client_id': process.env.AUTH0_CLIENT_ID, 'client_secret': process.env.AUTH0_CLIENT_SECRET, 'audience': process.env.AUTH0_AUDIENCE, 'grant_type': 'client_credentials' };
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

export const auth: () => Promise<IToken|undefined> = async () => {
  try {
    let tokenJson: string = await retrieveToken(tokenRetrievalOpts);
    let tokenObj: IToken = JSON.parse(tokenJson);
    let headers = buildTokenHeader(tokenObj);
    // console.log(`${API_HOST}/${API_MOUNT}`);
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
        console.error('still not working with newly retrieved token??? Send message to admin');
        return undefined;
      }else{
        console.log(`Token test on pg api was successfull: ${testReqRes.body}`);
        return tokenObj;
      }
    }else{
      console.log(`Token test on pg api was successfull: ${testReqRes.body}`);
      return tokenObj;
    }
  } catch (error) {
    throw error;
  }
}
