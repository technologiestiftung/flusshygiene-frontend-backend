"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("../action-types");
/**
 * Here we add all errors the the state
 * follow this function to the lib/root-reducer.js where it is added to the store
 * @param {Array} state
 * @param {Object} action
 */
const errors = (state = [], action) => {
    switch (action.type) {
        case action_types_1.GET_DATA_ERROR:
        case action_types_1.POST_DATA_ERROR:
            return [action.error, ...state];
        default:
            return state;
    }
};
exports.default = errors;
