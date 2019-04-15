"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const navigation_1 = require("./navigation");
exports.Header = () => (react_1.default.createElement("header", null,
    react_1.default.createElement(navigation_1.Navigation, null),
    react_1.default.createElement("p", null, "head comopnent")));
