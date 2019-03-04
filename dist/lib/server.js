"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const flusshygiene_utils_1 = require("@tsb/flusshygiene-utils");
const http_1 = __importDefault(require("http"));
// import { OPEN } from 'ws';
// import WebSocket from 'ws';
const app_1 = __importDefault(require("./app"));
const websocket_1 = require("./websocket");
const PORT = process.env.FRONTEND_EXPRESS_PORT || 3004;
const log = flusshygiene_utils_1.devlogGen(PORT);
// tslint:disable-next-line:no-console
// console.log(process.env);
// app.listen(PORT, log);
app_1.default.locals.val = 0;
const server = http_1.default.createServer(app_1.default);
const wsserver = websocket_1.WS.getInstance(server);
// wsserverSetup(server);
wsserver.on('connection', () => {
    process.stdout.write(`somebody connected\n`);
});
websocket_1.WS.emitter.on('messages', (message) => {
    process.stdout.write(`event emitter, ${message}\n`);
});
server.listen(PORT, log);
server.on('listening', () => {
    process.stdout.write('listenting');
    // setInterval(() => {
    //   WS.emitter.emit('send', 'sending data outside of wsserver');
    // }, 1000);
});
