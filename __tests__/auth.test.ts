import fs from 'fs';
import nock from 'nock';
import path from 'path';
import { buildTokenHeader } from '../src/lib/auth/build-token-headers';
import { checkFileExists } from '../src/lib/auth/check-if-file-exists';
import {
  IToken,
  ITokenRetrieveOptions,
  ITokenTestRequestOpts,
} from '../src/lib/common/interfaces';
import { makeTestRequest } from './../src/lib/auth/make-test-request';
import { readToken } from './../src/lib/auth/read-token';
import { removeToken } from './../src/lib/auth/remove-token';
import { requestToken } from './../src/lib/auth/request-token';
import { retrieveToken } from './../src/lib/auth/retrieve-token';
import { writeToken } from './../src/lib/auth/write-token';
// import util from 'util';
// const writeFileAsync = util.promisify(fs.writeFile);

afterAll(nock.restore);
afterEach(nock.cleanAll);
describe('Testing auth util functions', () => {
  it('Should return an object with specific values', async (done) => {
    const tokenObj: IToken = {
      access_token: 'xyz',
      expires_in: 0,
      token_type: 'Bearer',
    };
    expect(buildTokenHeader(tokenObj)).toEqual({
      authorization: `${tokenObj.token_type} ${tokenObj.access_token}`,
    });
    done();
  });

  it('Should check if files exists or not', async (done) => {
    expect(checkFileExists(path.resolve(__dirname, './auth.test.ts'))).toBe(
      true,
    );
    expect(checkFileExists(path.resolve(__dirname, './foo.bah.baz'))).toBe(
      false,
    );
    expect(checkFileExists(path.resolve(__dirname, './'))).toBe(false);
    done();
  });

  it('should make a test request and get a response from it', async (done) => {
    const opts: ITokenTestRequestOpts = {
      headers: { authorization: '' },
      url: 'http://mock.test/api/v1/',
    };
    nock('http://mock.test')
      .get('/api/v1/')
      .reply(200);
    const response = await makeTestRequest(opts);
    expect(response.statusCode).toBe(200);
    done();
  });

  it('should make a token request and get a response from it', async (done) => {
    const url = 'http://mock.token';
    const resBody = {
      access_token: 'xyz',
      expires_in: 7200,
      scope: 'admin',
      token_type: 'Bearer',
    };
    const body = {
      audience: 'you',
      client_id: 'xyz',
      client_secret: 'abc',
      grant_type: 'client_credentials',
    };
    nock(url)
      .post('/')
      .reply(200, resBody);
    const headers = {};
    const response = await requestToken({
      body: JSON.stringify(body),
      headers,
      url,
    });
    // console.log(response);
    expect(typeof response).toBe('string');
    done();
  });

  it('should make a token request and throw an error', async (done) => {
    const url = 'http://mock.token';
    nock(url)
      .post('/')
      .reply(500);
    const body = {
      audience: 'you',
      client_id: 'xyz',
      client_secret: 'abc',
      grant_type: 'client_credentials',
    };
    const headers = {};
    expect(
      requestToken({ url, body: JSON.stringify(body), headers }),
    ).rejects.toEqual(new Error('Could not get a token'));

    done();
  });
  it.skip('Should retrieve a token', async (done) => {
    const url = 'http://mock.token';
    const resBody = {
      access_token: 'xyz',
      expires_in: 7200,
      scope: 'admin',
      token_type: 'Bearer',
    };

    const body = {
      audience: 'you',
      client_id: 'xyz',
      client_secret: 'abc',
      grant_type: 'client_credentials',
    };

    nock(url)
      .post('/')
      .reply(200, resBody);

    const fp = path.resolve(__dirname, 'token.json');
    const opts: ITokenRetrieveOptions = {
      optsGetToken: { url, body: JSON.stringify(body), headers: {} },
      tokenPath: fp,
    };
    const res = await retrieveToken(opts);
    expect(typeof res).toBe('string');
    done();
  });
  it('Should read a file and return its content', async (done) => {
    const fp = path.resolve(__dirname, 'foo.txt');
    // await writeFileAsync(fp,'foo');
    await writeToken(fp, 'foo');
    const fileContent = await readToken(fp);
    expect(fileContent).toBe('foo');
    await removeToken(fp);
    done();
  });

  it('Should create a file', async (done) => {
    const fp = path.resolve(__dirname, 'foo.txt');
    await writeToken(fp, '');
    expect(checkFileExists(fp)).toBe(true);
    expect(fs.existsSync(fp)).toBe(true);
    await removeToken(fp);
    done();
  });
});
