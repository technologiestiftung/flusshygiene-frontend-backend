"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_throttle_1 = __importDefault(require("lodash.throttle"));
const redux_1 = require("redux");
const local_storage_1 = require("./lib/local-storage");
const middleware_1 = __importDefault(require("./lib/middleware"));
const root_reducer_1 = __importDefault(require("./lib/root-reducer"));
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
const persistedState = local_storage_1.loadState();
const store = redux_1.createStore(root_reducer_1.default, persistedState, composeEnhancers(redux_1.applyMiddleware(middleware_1.default)));
store.subscribe(lodash_throttle_1.default(() => {
    local_storage_1.saveState(store.getState());
}, 1000));
exports.default = store;
