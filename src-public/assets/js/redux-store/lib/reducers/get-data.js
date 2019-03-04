"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("../action-types");
const data = (state = [], action) => {
    switch (action.type) {
        case action_types_1.GET_DATA_RECEIVED:
            return [action.body.data];
        default:
            return state;
    }
};
exports.default = data;
