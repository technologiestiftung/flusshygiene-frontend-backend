"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function index(request, response) {
    response.render('index', {
        foo: { bar: 'baz' },
        title: 'title from route',
        url: request.url,
    });
}
exports.index = index;
