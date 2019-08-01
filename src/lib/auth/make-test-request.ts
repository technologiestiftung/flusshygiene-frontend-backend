import got from 'got';
import { ITokenTestRequestOpts } from '../common/interfaces';
export const makeTestRequest: (opts: ITokenTestRequestOpts) => Promise<got.Response<string>> = async (opts) => {
  try {
    const response = await got(opts.url, { headers: opts.headers });
    // console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
