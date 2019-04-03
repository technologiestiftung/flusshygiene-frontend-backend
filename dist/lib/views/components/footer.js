"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const default_scripts_1 = require("./default-scripts");
exports.Footer = () => (react_1.default.createElement("footer", null,
    react_1.default.createElement("div", null, "This is the Footer Component"),
    react_1.default.createElement(default_scripts_1.DefaultFooterScripts, null)));
