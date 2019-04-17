"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../../common/utils");
exports.Measurement = (props) => {
    return (react_1.default.createElement("div", { className: 'bathingspot__body-measurement' },
        react_1.default.createElement("h3", null, "Wasserqualit\u00E4t"),
        (() => {
            const sortedMeasurment = props.measurements.sort(utils_1.measurementSort);
            const dateOpts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("p", null, `wasserqualitaet: (NOT YET PARSED TO TEXT) ${sortedMeasurment[0].wasserqualitaetTxt}`),
                react_1.default.createElement("p", null,
                    "(Letzte Messung ",
                    new Date(sortedMeasurment[0].date).toLocaleDateString('de-DE', dateOpts),
                    ")")));
        })(),
        props.children));
};
