import { ITokenRetrieveOptions } from './../common/interfaces/iauth';
import { checkFileExists } from './check-if-file-exists';
import { readToken } from './read-token';
import { requestToken } from './request-token';
import { writeToken } from './write-token';

export const retrieveToken: (
  opts: ITokenRetrieveOptions,
) => Promise<string> = async opts => {
  try {
    let tokenJson;
    if (checkFileExists(opts.tokenPath) === true) {
      console.log('We have a token on disk');
      tokenJson = await readToken(opts.tokenPath);
      return tokenJson;
    } else {
      console.log('token file does not exists');
      console.log('requesting new token');
      // get new one
      tokenJson = await requestToken(opts.optsGetToken);
      console.log('writing new token to disk');
      await writeToken(opts.tokenPath, tokenJson);
      if (checkFileExists(opts.tokenPath) === true) {
        console.log('We have a token on disk (now)');
        tokenJson = await readToken(opts.tokenPath);
        return tokenJson;
      } else {
        throw new Error('Could not find token that was requested just now');
      }
    }
  } catch (error) {
    throw error;
  }
};
