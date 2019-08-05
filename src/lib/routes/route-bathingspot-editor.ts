import got from 'got';
import { IBathingspotProps } from '../common/interfaces/iviews';
import { gotOpts, isUserLoggedIn } from '../common/routes-commons';
import { AsyncRoute } from './../common/types';
import { routeErrorHandler } from './routes-error-handler';

export const bathingspotEditor: AsyncRoute = async (request, response) => {
  // console.log(request.params);
  try {
    const result = await got(`bathingspots/${request.params.spotId}`, gotOpts);
    // console.log(JSON.parse(result.body));
    // if (request.session !== undefined) {
    //   console.log(request.session.name);
    //   // request.session.name = 'my session';
    // }
    const data: IBathingspotProps = {
      isLoggedin: isUserLoggedIn(request.app.locals.user),
      spot: JSON.parse(result.body)[0],
    };
    response.render('bathingspot', data);
  } catch (error) {
    routeErrorHandler(`bathingspot/${request.params.spotId}`, error);
  }
};
