import { EnvSuffixes, APIMountPoints } from './common/enums';
// should read all the possible configs and export them
// add additional logic for getting setup right between
// 1. local machine cms with local api
// 2. local machine cms with local api in docker
// 3. local machine cms with remote API
// 4. local docker cms with docker API
// 5. local docker cms with local api
// 6. local docker cms with remote API
// 7. remote docker cms with remote API in same eb env
// 8. remote docker  cms with remote API in different eb env
// puh

export const NODE_ENV = process.env.NODE_ENV;
export const ENV_SUFFIX = process.env.NODE_ENV === 'development' ? EnvSuffixes.dev : EnvSuffixes.prod;

export const API_HOST = process.env[`POSTGRES_EXPRESS_API_HOST_${ENV_SUFFIX}`];
export const API_MOUNT = APIMountPoints.v1;

