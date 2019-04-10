"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.Map = (props) => (react_1.default.createElement("div", { id: 'map' },
    react_1.default.createElement("p", null, props.str)));
