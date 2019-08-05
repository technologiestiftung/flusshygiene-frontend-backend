import { IViewProps } from '../common/interfaces/iviews';
import { isUserLoggedIn } from '../common/routes-commons';
import { AsyncRoute } from '../common/types';
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
