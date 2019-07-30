import { IReport } from '../common/interfaces';
import { AsyncRoute } from '../common/types';
import { isUserLoggedIn } from '../common/routes-commons';
import { routeErrorHandler } from './routes-error-handler';

export const report: AsyncRoute = async (request, response) => {
  try {
    const data: IReport = {
      answers: (request.session !== undefined) ? request.session.answers : undefined,
      isLoggedin: isUserLoggedIn(request.app.locals.user),
      questions: request.app.locals.questions,
      title: 'Auswertung',
    };
    response.render('questionaire-report', data);
  } catch (error) {
    routeErrorHandler(`report`, error);

  }
};
