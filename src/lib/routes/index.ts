import got from 'got';
import url from 'url';
import { IAnswerFormData, IObject, IQuestionFile } from '../common/interfaces';
import { AsyncRoute } from '../common/types';
import { apiUrlsGen } from '../common/urls/index';
import { sessionAnswerGet, sessionAnswerSet } from '../sessions';

const apiurls = apiUrlsGen();
const gotOpts: IObject = { baseUrl: apiurls.apiPath };

const routeErrorHandler: (route: string, error: Error) => void = (route, error) => {
  if (process.env.NODE_ENV === 'development') {
    console.trace(error);
    console.error('Error on route: ', route);
    console.error('Error: name', error.name);
    console.error('Error: message', error.message);
    console.error('Error: stack', error.stack);
    throw error;
  } else {
    console.log(error);
  }
};

export const index: AsyncRoute = async (request, response) => {
  try {
    // console.log(request.session);
    // if (request.session !== undefined) {
    //   request.session.name = 'my session';
    // }

    const result = await got('bathingspots', gotOpts);
    response.render('index', {
      spots: JSON.parse(result.body),
      title: `title from route index ${__dirname}`,
      url: request.url,
    });
  } catch (error) {
    routeErrorHandler('index', error);
  }
};

export const bathingspot: AsyncRoute = async (request, response) => {
  // console.log(request.params);
  try {
    const result = await got(`bathingspots/${request.params.spotId}`, gotOpts);
    // console.log(JSON.parse(result.body));
    // if (request.session !== undefined) {
    //   console.log(request.session.name);
    //   // request.session.name = 'my session';
    // }
    response.render('bathingspot', {
      spot: JSON.parse(result.body)[0],
    });
  } catch (error) {
    routeErrorHandler(`bathingspot/${request.params.spotId}`, error);
  }

};

export const info: AsyncRoute = async (_request, response) => {
  try {
    response.render('info');
  } catch (error) {
    routeErrorHandler('info', error);
  }
};

export const questionnaire: AsyncRoute = async (_request, response) => {
  try {
    response.render('questionnaire');
  } catch (error) {
    routeErrorHandler('questionnaire', error);
  }
};

/**
 * An async route for the questionnaire questions.
 * The questions content are loaded on startup into the app.locals.questions Array.
 * It only passes the the question defined the `:qId` paramters to the route.
 *
 * @param {e.Request} request the default express request object
 * @param {e.Response} response  the default express response object
 */
export const question: AsyncRoute = async (request, response) => {
  const q: IQuestionFile[] = request
    .app
    .locals
    .questions
    .filter((ele: IQuestionFile) => ele.id === parseInt(request.params.qId, 10));
  // console.log('in route', q[0].data);
  try {
    let answer: IAnswerFormData | undefined;
    if (request.session !== undefined) {

      answer = sessionAnswerGet(parseInt(request.params.qId, 10), request.session.answers);
    }
    response.render('question', {
      data: q[0].data,
      lastId: request.app.locals.questions.length - 1,
      previousAnswer: answer,
      qId: q[0].id,
      questionId: q[0].questionId,
    });
    // response.send(`<h1>Hello Question ${request.params.qId}</h1>${JSON.stringify(q[0])}`);
  } catch (error) {
    routeErrorHandler(`question/${request.params.qId}`, error);

  }
};

/**
 * This async route takes care of recieving POST requests on the questionnaire route
 * @param {e.Request} request
 * @param {e.Response} response
 */
export const questionPostHandle: AsyncRoute = async (request, response) => {
  // console.log('POST from FORM called');
  console.log(request.body);
  if (request.body.answer !== undefined) {
    const answerData: IAnswerFormData = JSON.parse(request.body.answer);
    if (request.session !== undefined) {
      request.session.answers = sessionAnswerSet(answerData, request.session.answers);
    }
  }
  const targeturl = url.parse(request.body.targeturl);
  console.log(targeturl);
  if (targeturl.host !== null) {
    response.redirect(targeturl.href!);
  } else {
    response.redirect(request.url);

  }
};
