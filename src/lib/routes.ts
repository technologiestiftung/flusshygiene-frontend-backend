import {Request, Response} from 'express';

export function index(request: Request, response: Response) {
  response.render('index', {
    foo: {bar: 'baz'},
    title: 'title from route',
    url: request.url,
  });
}
