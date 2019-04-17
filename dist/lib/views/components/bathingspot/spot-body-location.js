"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.SpotBodyLocation = (props) => {
    return (react_1.default.createElement("div", { className: 'bathingspot__body-location' },
        react_1.default.createElement("h3", null, "Anschrift"),
        react_1.default.createElement("p", null, props.nameLong),
        react_1.default.createElement("p", null, props.street),
        react_1.default.createElement("p", null,
            props.postalCode,
            " ",
            props.city),
        (() => {
            if (props.website.length > 0) {
                // const reg = /^(http|https?)\:\/\//g;
                return (react_1.default.createElement("p", null,
                    react_1.default.createElement("a", { href: `${props.website}` }, props.website.replace(/^https?\:\/\//g, '').replace(/\/$/, ''))));
            }
            return null;
        })(),
        react_1.default.createElement("p", null,
            react_1.default.createElement("a", { href: `https://maps.google.com/maps?daddr=${props.longitude},${props.latitude}` }, "Route Berechnen"))));
};
