import got from 'got';
import { ITokenRequestOpts } from '../common/interfaces';

export const requestToken: (opts: ITokenRequestOpts) => Promise<string> = async (opts) => {
  try {
    const response = await got.post(opts.url, { body: opts.body, headers: opts.headers });
    if (response.statusCode !== 200) {
      const msg = 'Could not get a token';
      throw new Error(msg);
    } else {
      return response.body;
    }
  } catch (error) {
    throw error;
  }
}
