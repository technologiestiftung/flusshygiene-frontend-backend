"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("./action-types");
exports.triggerDefault = () => {
    return { type: action_types_1.DEFAULT };
};
exports.getData = () => {
    return { type: action_types_1.GET_DATA };
};
exports.postData = (body) => {
    return { type: action_types_1.POST_DATA, body };
};
