"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../../common/utils");
const measurement_table_row_1 = require("./measurement-table-row");
exports.MeasurementTable = (props) => {
    const sortedMeasurement = props.measurements.sort(utils_1.measurementSort);
    return (react_1.default.createElement("table", { className: 'bathingspot__measurement-table' },
        react_1.default.createElement("tbody", null,
            react_1.default.createElement(measurement_table_row_1.MeasurementTableRow, { rowKey: 'Sichttiefe', rowValue: `${sortedMeasurement[0].sichtTxt} cm` }),
            react_1.default.createElement(measurement_table_row_1.MeasurementTableRow, { rowKey: 'Escherichia coli', rowValue: `${sortedMeasurement[0].ecoTxt} pro 100 ml` }),
            react_1.default.createElement(measurement_table_row_1.MeasurementTableRow, { rowKey: 'Intestinale Enterokokken', rowValue: `${sortedMeasurement[0].enteTxt} pro 100 ml` }),
            react_1.default.createElement(measurement_table_row_1.MeasurementTableRow, { rowKey: 'Wassertemperatur', rowValue: `${sortedMeasurement[0].tempTxt.replace('.', ',')} °C` }),
            react_1.default.createElement(measurement_table_row_1.MeasurementTableRow, { rowKey: 'Coliforme Bakterien', rowValue: `${sortedMeasurement[0].cb} pro 100 ml` }))));
};
