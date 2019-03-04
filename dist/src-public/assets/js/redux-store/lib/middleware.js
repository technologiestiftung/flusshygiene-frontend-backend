"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("./action-types");
const ajax_request_1 = __importDefault(require("./ajax-request"));
const middleware = (store) => (next) => (action) => {
    next(action);
    const req = ajax_request_1.default(next);
    switch (action.type) {
        case action_types_1.GET_DATA:
            // tslint:disable-next-line:no-console
            console.log(action_types_1.GET_DATA, store);
            req();
            break;
        case action_types_1.POST_DATA:
            req({
                async: true,
                body: action.body,
                method: 'POST',
                url: `${location.hostname}:${process.env.PARCEL_WS_PORT}`,
            });
            break;
        default:
            break;
    }
};
exports.default = middleware;
