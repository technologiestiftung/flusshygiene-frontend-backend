"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.DefaultFooterScripts = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("script", { src: 'assets/js/index.js' })));
exports.DefaultHeaderScripts = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("script", { src: 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js' })));
