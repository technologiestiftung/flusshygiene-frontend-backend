import { IViewProps } from '../common/interfaces';
import { AsyncRoute } from '../common/types';
import { isUserLoggedIn } from '../common/routes-commons';
import { routeErrorHandler } from './routes-error-handler';

export const info: AsyncRoute = async (request, response) => {
  try {
    const data: IViewProps =  {
      isLoggedin: isUserLoggedIn(request.app.locals.user),
    };
    response.render('info', data);
  } catch (error) {
    routeErrorHandler('info', error);
  }
};
