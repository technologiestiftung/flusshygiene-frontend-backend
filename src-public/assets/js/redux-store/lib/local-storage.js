"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};
exports.saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.error(err);
    }
};
