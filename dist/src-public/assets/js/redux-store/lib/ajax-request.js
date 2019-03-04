"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultOptions = { method: 'GET', url: '', async: true, type: 'DEFAULT' };
const request = (next) => (opts) => {
    const option = Object.assign({}, defaultOptions, opts);
    const xhr = new XMLHttpRequest();
    xhr.open(option.method, option.url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let responseText;
            try {
                responseText = JSON.parse(xhr.responseText);
            }
            catch (err) {
                // tslint:disable-next-line:no-console
                console.log(err);
                responseText = { raw: xhr.responseText, err };
            }
            if (xhr.status === 200) {
                // success we got an answer with status 200
                // dispatch an actoin with its content
                // follow this action to
                // the response for the POST request actually
                // lands on neverland…
                return next({
                    body: responseText,
                    type: `${option.type}_RECEIVED`,
                });
            }
            else {
                // we count any other status then 200 as error
                // so we dispatch and error message for that
                // follow it to
                // lib/reducers/error.js
                return next({
                    error: {
                        message: responseText,
                        status: xhr.status,
                    },
                    type: `${option.type}_ERROR`,
                });
            }
        }
    };
    // if we have a body
    if (option.body !== undefined) {
        // console.log('send with body');
        // send it
        // this is POST
        // console.log(option.body);
        xhr.send(JSON.stringify(option.body));
    }
    else {
        // if we have no body we are making a GET request
        xhr.send();
    }
};
exports.default = request;
