import got = require('got');
import { IIndexProps } from '../common/interfaces/iviews';
import { gotOpts, isUserLoggedIn } from '../common/routes-commons';
import { AsyncRoute } from '../common/types';
import { routeErrorHandler } from './routes-error-handler';

export const index: AsyncRoute = async (request, response) => {
  try {
    // console.log(request.session);
    // if (request.session !== undefined) {
    //   request.session.name = 'my session';
    // }

    // console.log(request.app.locals.user);
    const result = await got('bathingspots', gotOpts);
    const data: IIndexProps = {
      isLoggedin: isUserLoggedIn(request.app.locals.user),
      spots: JSON.parse(result.body),
      title: `title from route index ${__dirname}`,
      url: request.url,
    };
    response.render('index', data);
  } catch (error) {
    routeErrorHandler('index', error);
  }
};
