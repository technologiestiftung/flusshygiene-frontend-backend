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
// const wsclient = new WebSocket(`wss://localhost:${PORT}`);
// let count = 0;
// setInterval(() => {
//   clients.forEach((client) => {
//     count++;
//     const payload = {payload: count};
//     if (client.readyState === OPEN) {
//       client.send(protocoolMessage(payload));
//     }
//   });
// }, 1000);
// wss.on('connection', (ws: WebSocket) => {
//   ws.on('message', (message: string) => {
//     const msg = `roundtrip message -> ${message} `;
//     process.stdout.write(`${msg}\n`);
//     ws.send(msg);
//     if (message === 'incr') {
//       app.locals.val = app.locals.val + 1;
//       ws.send(JSON.stringify({
//         target: 'foo',
//         type: 'incr',
//         value: app.locals.val,
//       }));
//     }
//   });
// });
server.listen(PORT, log);
// const http = require('http');
// const server = http.createServer((req, resp)=>{
//   resp.end('Hello from the container');
// });
// // let count = 0;
// // console.log(process.env);
// // const interval = setInterval(()=>{
// //   console.log(count);
// //   count++;
// //   if (count === 5) {
// //     clearInterval(interval);
// //   }
// // },300);
// server.listen(process.env.FRONTEND_EXPRESS_PORT,(err)=>{
//   if(err){
//     throw err;
//   }
//   console.log(`server listening on port http://localhost:${process.env.FRONTEND_EXPRESS_PORT}`);
// });
// process.on('uncaughtException', (err) => {
//   wsserver.close();
//   process.stderr.write(`${err}\n`);
//   process.exit(1);
// })
