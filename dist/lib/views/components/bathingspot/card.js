"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enums_1 = require("../../../common/enums");
exports.Card = (props) => (react_1.default.createElement("li", { className: 'list__item--bathingspots' },
    react_1.default.createElement("a", { href: `/${enums_1.RouteNames.bathingspot}/${props.id}` },
        react_1.default.createElement("img", { src: '', alt: '', className: 'spot-image' }),
        react_1.default.createElement("img", { src: '', alt: '', className: 'state-image' }),
        react_1.default.createElement("span", { className: 'spot-title' }, props.title),
        (() => {
            if (props.hasPrediction === true) {
                return react_1.default.createElement("span", { className: 'asteriks' }, " * ");
            }
            return null;
        })(),
        (() => {
            if (props.hasOwnProperty('water') === true && props.water.length >= 0 && props.water !== props.title) {
                return react_1.default.createElement("span", { className: 'spot-water' }, props.water);
            }
            return null;
        })())));
