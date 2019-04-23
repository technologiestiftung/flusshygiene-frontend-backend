import got from 'got';
import { IObject, IQuestionFile } from '../common/interfaces';
import { AsyncRoute } from '../common/types';
import { apiUrlsGen } from '../common/urls/index';

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

export const question: AsyncRoute = async (request, response) => {
  const q = request
    .app
    .locals
    .questions
    .filter((ele: IQuestionFile) => ele.id === parseInt(request.params.qId, 10));
  // console.log('in route', q[0].data);
  try {
    response.render('question', {
      data: q[0].data,
      lastId: request.app.locals.questions.length - 1,
      qId: q[0].id,
    });
    // response.send(`<h1>Hello Question ${request.params.qId}</h1>${JSON.stringify(q[0])}`);
  } catch (error) {
    routeErrorHandler(`question/${request.params.qId}`, error);

  }
};
