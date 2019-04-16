"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.SpotHeader = (props) => (react_1.default.createElement("div", { className: 'bathingspot__header' },
    react_1.default.createElement("h1", null,
        props.nameLong,
        " ",
        react_1.default.createElement("span", null, props.district)),
    (() => {
        if (props.nameLong !== props.water && props.water !== undefined) {
            return react_1.default.createElement("h2", null, props.water);
        }
        return null;
    })(),
    react_1.default.createElement("hr", null)));
