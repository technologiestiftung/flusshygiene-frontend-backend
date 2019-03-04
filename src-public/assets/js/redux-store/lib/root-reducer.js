"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const default_1 = __importDefault(require("./reducers/default"));
const error_1 = __importDefault(require("./reducers/error"));
const get_data_1 = __importDefault(require("./reducers/get-data"));
const post_data_response_1 = __importDefault(require("./reducers/post-data-response"));
const reducers = redux_1.combineReducers({
    data: get_data_1.default,
    def: default_1.default,
    errors: error_1.default,
    responses: post_data_response_1.default,
});
exports.default = reducers;
