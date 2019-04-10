"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const got_1 = __importDefault(require("got"));
const index_1 = require("./common/urls/index");
const router = express_promise_router_1.default();
const apiurls = index_1.apiUrlsGen();
async function index(request, response) {
    try {
        const res = await got_1.default('bathingspots', { baseUrl: apiurls.apiPath }); // return value of body is string
        // console.log(typeof res.body); // <-- string
        response.render('index', {
            foo: { bar: 'baz' },
            spots: JSON.parse(res.body),
            title: `title from route index ${__dirname}`,
            url: request.url,
        });
    }
    catch (error) {
        if (process.env.NODE_ENV === 'development') {
            throw error;
        }
        else {
            console.log(error);
        }
    }
}
router.get('/', index);
exports.default = router;
