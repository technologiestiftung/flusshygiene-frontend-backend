import { GET_DATA, POST_DATA } from './action-types';

import request from './ajax-request';

// this is not strongly typed
//  needs some love
export type IMiddleware = (store: any) => (next: any) => (action: any) => any;
const middleware: IMiddleware = (store) => (next) => (action) => {
  next(action);
  const req = request(next);
  switch (action.type) {
    case GET_DATA:
      // tslint:disable-next-line:no-console
      console.log(GET_DATA, store);
      req();
      break;
    case POST_DATA:
      req({
        async: true,
        body: action.body,
        method: 'POST',
        url: `${location.hostname}:${process.env.PARCEL_WS_PORT}`,
      });
      break;
    default:
    break;
  }
};

export default middleware;
