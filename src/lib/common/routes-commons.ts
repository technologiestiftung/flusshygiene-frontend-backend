import { IObject } from './interfaces';
import { apiUrlsGen } from './urls';

export const apiurls = apiUrlsGen();
export const gotOpts: IObject = { baseUrl: apiurls.apiPath };

export const isUserLoggedIn = (user: IObject | undefined) =>
  user === undefined ? false : true;
