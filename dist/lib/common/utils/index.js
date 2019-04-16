"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.measurementSort = (a, b) => {
    return new Date(a.date) - new Date(b.date);
};
