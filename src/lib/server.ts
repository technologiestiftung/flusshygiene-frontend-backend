import {devlogGen} from '@tsb/flusshygiene-utils';
import browserSync from 'browser-sync';
import http from 'http';
// import { OPEN } from 'ws';
// import WebSocket from 'ws';
import app from './app';
import {WS} from './websocket';

const PORT = process.env.FRONTEND_EXPRESS_PORT || 3004;
const log = devlogGen(PORT);

// tslint:disable-next-line:no-console
// console.log(process.env);
// app.listen(PORT, log);
app.locals.val = 0;

const server = http.createServer(app);
const wsserver = WS.getInstance(server);
// wsserverSetup(server);
wsserver.on('connection', () => {
  process.stdout.write(`somebody connected\n`);

});

WS.emitter.on('messages', (message) => {
  process.stdout.write(`event emitter, ${message}\n`);
});

server.listen(PORT, log);

server.on('listening', () => {
  browserSync({
    files: ['../../public/assets/css/**/*.{css}'],
    open: false,
    proxy: `localhost:${PORT}`,
  });
  process.stdout.write('listenting');
  // setInterval(() => {
  //   WS.emitter.emit('send', 'sending data outside of wsserver');
  // }, 1000);
});
