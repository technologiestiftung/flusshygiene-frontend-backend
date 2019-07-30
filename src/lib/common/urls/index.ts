import { APIMountPoints } from './../enums/index';
import { TApiUrls } from './../types';
import { EnvSuffixes } from '../enums';

export const apiUrlsGen: TApiUrls = () => {
  const ENV_SUFFIX = process.env.NODE_ENV === 'development' ? EnvSuffixes.dev : EnvSuffixes.prod;
  const PORT = process.env[`POSTGRES_EXPRESS_PORT_${ENV_SUFFIX}`]!
  const HOST = process.env[`POSTGRES_EXPRESS_API_HOST_${ENV_SUFFIX}`]!;
  let baseUrl: string ='';
  if(process.env.LIVE_API === '1'){
    baseUrl = HOST;

  }else{
    baseUrl = process.env.NODE_ENV === 'development' ? `${HOST}:${PORT}` : HOST ;

  }
  const apiMount = APIMountPoints.v1;
  const apiPath = `${baseUrl}/${apiMount}`;
  return {
    apiMount,
    apiPath,
    baseUrl,
  };
};
