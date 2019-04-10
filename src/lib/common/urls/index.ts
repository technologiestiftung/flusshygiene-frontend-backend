import { TApiUrls } from './../types';

export const apiUrlsGen: TApiUrls = () => {
  const baseUrl = process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.POSTGRES_EXPRESS_PORT}` : '';
  const apiMount = 'api/v1';
  const apiPath = `${baseUrl}/${apiMount}`;
  return {
    apiMount,
    apiPath,
    baseUrl,
  };
};
