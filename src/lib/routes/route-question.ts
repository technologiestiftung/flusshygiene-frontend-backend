import url from 'url';
import { IAnswerFormData } from '../common/interfaces';
import { IQuestionFile } from '../common/interfaces/isetup';
import { IQuestion } from '../common/interfaces/iviews';
import { isUserLoggedIn } from '../common/routes-commons';
import { AsyncRoute } from '../common/types';
import { sessionAnswerGet, sessionAnswerSet } from '../sessions';
import { routeErrorHandler } from './routes-error-handler';

/**
 * An async route for the questionnaire questions.
 * The questions content are loaded on startup into the app.locals.questions Array.
 * It only passes the the question defined the `:qId` paramters to the route.
 *
 * @param request the default express request object
 * @param response  the default express response object
 */
export const question: AsyncRoute = async (request, response) => {
  const q: IQuestionFile[] = request.app.locals.questions.filter(
    (ele: IQuestionFile) => ele.qId === parseInt(request.params.qId, 10),
  );
  try {
    if (q[0].qId === undefined) {
      throw new Error('there is no question for this route');
    }
    let answer: IAnswerFormData | undefined;
    if (request.session !== undefined) {
      answer = sessionAnswerGet(
        parseInt(request.params.qId, 10),
        request.session.answers,
      );
    }
    const data: IQuestion = {
      data: q[0].data !== undefined ? q[0].data : [],
      isLoggedin: isUserLoggedIn(request.app.locals.user),
      lastId: request.app.locals.questions.length - 1,
      previousAnswer: answer,
      qId: q[0].qId,
      questionId: q[0].questionId,
    };
    response.render('question', data);
  } catch (error) {
    routeErrorHandler(`question/${request.params.qId}`, error);
  }
};

/**
 * This async route takes care of recieving POST requests on the questionnaire route
 * @param  request
 * @param  response
 */
export const questionPostHandle: AsyncRoute = async (request, response) => {
  // console.log('POST from FORM called');
  if (request.body.answer !== undefined) {
    const answerData: IAnswerFormData = JSON.parse(request.body.answer);
    if (request.session !== undefined) {
      request.session.answers = sessionAnswerSet(
        answerData,
        request.session.answers,
      );
    }
  }
  const targeturl = url.parse(request.body.targeturl);
  if (targeturl.host !== null) {
    response.redirect(targeturl.href!);
  } else {
    response.redirect(request.url);
  }
};
