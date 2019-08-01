import { IToken, ITokenRequestHeaders } from './../common/interfaces/index';

export const buildTokenHeader: (tokenObj: IToken) => ITokenRequestHeaders = (tokenObj) => {
  return { authorization: `${tokenObj.token_type} ${tokenObj.access_token}` };
}
