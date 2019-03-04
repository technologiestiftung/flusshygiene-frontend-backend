"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const ws_1 = __importStar(require("ws"));
const broadcast = (wss, data) => {
    wss.clients.forEach((client) => {
        if (client.readyState === ws_1.OPEN) {
            client.send(data);
        }
        else {
            process.stderr.write(`client ${client} not ready\n`);
        }
    });
};
function default_1(server) {
    const wss = new ws_1.default.Server({ server });
    wss.on('connection', (client) => {
        client.on('error', (error) => {
            process.stderr.write(`Error in client:\n${client}\nerror:\n${error}\n`);
        });
        client.on('message', (data) => {
            broadcast(wss, data);
        });
    });
    return wss;
}
exports.default = default_1;
class WS {
    constructor(name) {
        this.name = name;
        // super();
    }
    static getInstance(server) {
        if (!WS.server) {
            WS.server = new ws_1.default.Server({ server });
            WS.server.on('connection', (client) => {
                client.on('error', (error) => {
                    process.stderr.write(`Error in client:\n${client}\nerror:\n${error}\n`);
                });
                client.on('message', (data) => {
                    WS.emitter.emit('messages', data);
                    broadcast(WS.server, data);
                });
            });
        }
        return WS.server;
    }
}
WS.emitter = new events_1.EventEmitter();
exports.WS = WS;
