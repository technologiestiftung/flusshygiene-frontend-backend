"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.SpotBodyFigure = (props) => (react_1.default.createElement("figure", null,
    react_1.default.createElement("img", { src: `${props.image}`, alt: `${props.nameLong}`, title: `${props.name}` }),
    react_1.default.createElement("figcaption", null,
        "Bildquelle: ",
        (() => {
            return props.imageAuthor !== undefined ? `${props.imageAuthor}` : 'Unbekannt';
        })())));
