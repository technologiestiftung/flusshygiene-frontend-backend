import got from 'got';
import { IObject } from '../common/interfaces';
import { AsyncRoute } from '../common/types';
import { apiUrlsGen } from '../common/urls/index';
const apiurls = apiUrlsGen();
const gotOpts: IObject = { baseUrl: apiurls.apiPath };

const routeErrorHandler: (error: Error) => void = (error) => {
  if (process.env.NODE_ENV === 'development') {
    console.trace(error);
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
    routeErrorHandler(error);
  }
};

export const bathingspot: AsyncRoute = async (request, response) => {
  console.log(request.params);
  try {
    const result = await got(`bathingspots/${request.params.spotId}`, gotOpts);
    // console.log(JSON.parse(result.body));

    response.render('bathingspot', {
      spot: JSON.parse(result.body)[0],
    });
  } catch (error) {
    routeErrorHandler(error);
  }

};
