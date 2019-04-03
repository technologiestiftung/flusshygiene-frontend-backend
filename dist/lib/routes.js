"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function index(request, response) {
    response.render('index', {
        foo: { bar: 'baz' },
        spots: ['foo', 'bah', 'baz'],
        title: `title from route index ${__dirname}`,
        url: request.url,
    });
}
exports.index = index;
