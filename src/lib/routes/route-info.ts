import { IViewProps } from '../common/interfaces/iviews';
import { isUserLoggedIn } from '../common/routes-commons';
import { AsyncRoute } from '../common/types';
import { routeErrorHandler } from './routes-error-handler';

export const info: AsyncRoute = async (request, response) => {
  try {
    const data: IViewProps = {
      isLoggedin: isUserLoggedIn(request.app.locals.user),
    };
    response.render('info', data);
  } catch (error) {
    routeErrorHandler('info', error);
  }
};
