import {Request, Response} from 'express';
import Router from 'express-promise-router';
import got from 'got';
import { apiUrlsGen } from './common/urls/index';
const router = Router();
const apiurls = apiUrlsGen();

async function index(request: Request, response: Response) {
  try {
    const res = await got('bathingspots', {baseUrl: apiurls.apiPath}); // return value of body is string
    // console.log(typeof res.body); // <-- string
    response.render('index', {
      foo: {bar: 'baz'},
      spots: JSON.parse(res.body),
      title: `title from route index ${__dirname}`,
      url: request.url,
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      throw error;
    } else {
      console.log(error);
    }
  }
}

router.get('/', index);
export default router;
