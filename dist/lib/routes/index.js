"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = __importDefault(require("got"));
const index_1 = require("../common/urls/index");
const apiurls = index_1.apiUrlsGen();
const gotOpts = { baseUrl: apiurls.apiPath };
const routeErrorHandler = (error) => {
    if (process.env.NODE_ENV === 'development') {
        console.trace(error);
        console.error('Error: name', error.name);
        console.error('Error: message', error.message);
        console.error('Error: stack', error.stack);
        throw error;
    }
    else {
        console.log(error);
    }
};
exports.index = async (request, response) => {
    try {
        const result = await got_1.default('bathingspots', gotOpts);
        response.render('index', {
            spots: JSON.parse(result.body),
            title: `title from route index ${__dirname}`,
            url: request.url,
        });
    }
    catch (error) {
        routeErrorHandler(error);
    }
};
exports.bathingspot = async (request, response) => {
    console.log(request.params);
    try {
        const result = await got_1.default(`bathingspots/${request.params.spotId}`, gotOpts);
        // console.log(JSON.parse(result.body));
        response.render('bathingspot', {
            spot: JSON.parse(result.body)[0],
        });
    }
    catch (error) {
        routeErrorHandler(error);
    }
};
