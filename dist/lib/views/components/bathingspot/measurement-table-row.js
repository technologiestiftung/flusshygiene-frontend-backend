"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.MeasurementTableRow = (props) => (react_1.default.createElement("tr", null,
    react_1.default.createElement("th", null, props.rowKey),
    react_1.default.createElement("td", null, props.rowValue)));
