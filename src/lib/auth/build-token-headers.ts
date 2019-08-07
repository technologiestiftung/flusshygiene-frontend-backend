import { IToken, ITokenRequestHeaders } from '../common/interfaces/iauth';

export const buildTokenHeader: (tokenObj: IToken) => ITokenRequestHeaders = (
  tokenObj,
) => {
  return { authorization: `${tokenObj.token_type} ${tokenObj.access_token}` };
};
