"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const map_1 = require("../components/map");
const skeleton_1 = require("../layouts/skeleton");
const bathingspot = (props) => {
    const { nameLong, water } = props.spot;
    const str = JSON.stringify(props.spot);
    return (react_1.default.createElement(skeleton_1.Skeleton, { title: 'foo' },
        react_1.default.createElement(map_1.Map, { str: 'Maps' }),
        react_1.default.createElement("h1", null, nameLong),
        (() => {
            if (nameLong !== water) {
                return react_1.default.createElement("h2", null, water);
            }
            return null;
        })(),
        react_1.default.createElement("script", { dangerouslySetInnerHTML: {
                __html: `
        // some script
        document.addEventListener('DOMContentLoaded',function() {
          console.log(JSON.parse('${str}'))
        });
        `,
            } })));
};
exports.default = bathingspot;
