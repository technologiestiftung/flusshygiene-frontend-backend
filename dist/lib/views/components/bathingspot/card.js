"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.Card = (props) => (react_1.default.createElement("li", null,
    react_1.default.createElement("a", { href: `/bathingspots/${props.str}` },
        react_1.default.createElement("img", { src: '', alt: '', className: 'spot-image' }),
        react_1.default.createElement("img", { src: '', alt: '', className: 'state-image' }),
        react_1.default.createElement("div", { className: 'spot-title' }, props.str),
        (() => {
            if (props.hasOwnProperty('water')) {
                return react_1.default.createElement("div", { className: 'spot-water' }, "water name");
            }
            return null;
        })())));
