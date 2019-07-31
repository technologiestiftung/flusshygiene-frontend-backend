import got from 'got';
import { ITokenTestRequestOpts } from '../common/interfaces';
export const makeTestRequest: (opts: ITokenTestRequestOpts) => Promise<got.Response<object>> = async (opts) => {
  try {
    const response = await got(opts.url, { headers: opts.headers });
    return response;
  } catch (error) {
    return error;
  }
}
