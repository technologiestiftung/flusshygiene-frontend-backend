"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const action_creators_1 = require("./redux-store/lib/action-creators");
const store_1 = __importDefault(require("./redux-store/store"));
//  ██████╗██╗     ██╗███████╗███╗   ██╗████████╗
// ██╔════╝██║     ██║██╔════╝████╗  ██║╚══██╔══╝
// ██║     ██║     ██║█████╗  ██╔██╗ ██║   ██║
// ██║     ██║     ██║██╔══╝  ██║╚██╗██║   ██║
// ╚██████╗███████╗██║███████╗██║ ╚████║   ██║
//  ╚═════╝╚══════╝╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝
const ws = new WebSocket(`ws://${location.hostname}:${process.env.PARCEL_WS_PORT}`);
function clickHandle(event) {
    ws.send('incr');
    store_1.default.dispatch(action_creators_1.triggerDefault());
    // tslint:disable-next-line:no-console
    console.log(store_1.default.getState());
    event.preventDefault();
}
document.addEventListener('DOMContentLoaded', () => {
    // tslint:disable-next-line:no-console
    // console.log('embedded script frontend in index view bunded with parcel and reload foo');
    const button = document.querySelector('.button');
    if (button !== null) {
        button.addEventListener('click', clickHandle);
    }
    // tslint:disable-next-line:no-console
    if (ws !== null) {
        // console.log(ws);
        ws.onopen = () => {
            ws.send('connection open');
        };
        ws.onmessage = (message) => {
            // tslint:disable-next-line:no-console
            // console.log(message);
            const target = document.querySelector('.message');
            if (target !== null) {
                target.innerHTML = message.data;
            }
        };
    }
});
