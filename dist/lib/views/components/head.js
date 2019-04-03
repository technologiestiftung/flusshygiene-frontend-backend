"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const default_scripts_1 = require("./default-scripts");
const default_styles_1 = require("./default-styles");
exports.Head = (props) => (react_1.default.createElement("head", null,
    react_1.default.createElement("title", null, props.title !== undefined ? props.title : 'Flusshygiene'),
    react_1.default.createElement(default_styles_1.DefaultStyles, null),
    react_1.default.createElement(default_scripts_1.DefaultHeaderScripts, null)));
