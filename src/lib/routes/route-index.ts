import got from 'got';
import { IObject } from '../common/interfaces';
import { IIndexProps } from '../common/interfaces/iviews';
import { gotOpts, isUserLoggedIn } from '../common/routes-commons';
import { AsyncRoute } from '../common/types';
import { routeErrorHandler } from './routes-error-handler';

export const index: AsyncRoute = async (request, response) => {
  try {
    // const gotOpts = {
    //   baseUrl: apiurls.baseUrl
    // }
    let truncated: boolean = true;
    let spots: IObject[] = [];
    let skip = 0;
    const limit = 50;
    while (truncated === true) {
      try {
        const res = await got(
          `bathingspots?skip=${skip}&limit=${limit}`,
          gotOpts,
        );
        if (res.statusCode !== 200) {
          break;
        }
        const body = JSON.parse(res.body);
        const d = body.data;
        spots = spots.concat(d);
        if (body.truncated === false) {
          truncated = false;
          // break;
        } else {
          skip += limit;
        }
      } catch (error) {
        console.error(error);
        break;
      }
    }
    // console.log('spots length in route-index', spots.length);
    // console.log();
    // const result = await got('bathingspots', gotOpts);
    const data: IIndexProps = {
      isLoggedin: isUserLoggedIn(request.app.locals.user),
      spots,
      title: `title from route index ${__dirname}`,
      url: request.url,
    };
    response.render('index', data);
  } catch (error) {
    routeErrorHandler('index', error);
  }
};
