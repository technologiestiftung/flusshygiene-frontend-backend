"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("./../action-types");
const def = (state = 0, action) => {
    switch (action.type) {
        case action_types_1.DEFAULT:
            return state + 1;
        default:
            return state;
    }
};
exports.default = def;
