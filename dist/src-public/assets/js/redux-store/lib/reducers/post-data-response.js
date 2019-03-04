"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("../action-types");
const responses = (state = [], action) => {
    switch (action.type) {
        case action_types_1.POST_DATA_RECEIVED:
            return [action.body, ...state];
        default:
            return state;
    }
};
exports.default = responses;
