import { APIMountPoints, EnvSuffixes } from '../enums';
import { TApiUrls } from './../types';

export const apiUrlsGen: TApiUrls = () => {
  const ENV_SUFFIX =
    process.env.NODE_ENV === 'development' ? EnvSuffixes.dev : EnvSuffixes.prod;
  const PORT = process.env[`POSTGRES_EXPRESS_PORT_${ENV_SUFFIX}`]!;
  const HOST = process.env[`POSTGRES_EXPRESS_API_HOST_${ENV_SUFFIX}`]!;
  let baseUrl: string = '';
  if (process.env.LIVE_API === '1') {
    baseUrl = process.env.POSTGRES_EXPRESS_API_HOST_PROD!;
  } else {
    baseUrl = `${HOST}:${PORT}`;
  }
  const apiMount = APIMountPoints.v1;
  const apiPath = `${baseUrl}/${apiMount}`;
  return {
    apiMount,
    apiPath,
    baseUrl,
  };
};
