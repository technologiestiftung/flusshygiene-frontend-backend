import { AsyncRoute } from '../common/types';
import { IViewProps } from './../common/interfaces';
import { isUserLoggedIn } from '../common/routes-commons';
import { routeErrorHandler } from './routes-error-handler';

export const questionnaire: AsyncRoute = async (request, response) => {
  try {
    const data: IViewProps = {
      isLoggedin: isUserLoggedIn(request.app.locals.user),
    };
    response.render('questionnaire', data);
  } catch (error) {
    routeErrorHandler('questionnaire', error);
  }
};
