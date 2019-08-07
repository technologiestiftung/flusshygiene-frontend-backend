import got from 'got';
import { IApiResponseBody } from '../common/interfaces/iapi';
import { IBathingspotProps } from '../common/interfaces/iviews';
import { gotOpts, isUserLoggedIn } from '../common/routes-commons';
import { AsyncRoute } from './../common/types';
import { routeErrorHandler } from './routes-error-handler';

export const bathingspotEditor: AsyncRoute = async (request, response) => {
  // console.log(request.params);
  try {
    const result = await got(`bathingspots/${request.params.spotId}`, gotOpts);
    const body: IApiResponseBody = JSON.parse(result.body);
    const spot = body.data[0];
    // console.log(JSON.parse(result.body));
    // if (request.session !== undefined) {
    //   console.log(request.session.name);
    //   // request.session.name = 'my session';
    // }
    const data: IBathingspotProps = {
      isLoggedin: isUserLoggedIn(request.app.locals.user),
      spot,
    };
    response.render('bathingspot', data);
  } catch (error) {
    routeErrorHandler(`bathingspot/${request.params.spotId}`, error);
  }
};
