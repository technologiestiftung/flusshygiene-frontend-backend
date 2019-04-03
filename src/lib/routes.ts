import {Request, Response} from 'express';

export function index(request: Request, response: Response) {
  response.render('index', {
    foo: {bar: 'baz'},
    spots: ['foo', 'bah', 'baz'],
    title: `title from route index ${__dirname}`,
    url: request.url,
  });
}
