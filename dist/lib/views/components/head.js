"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const default_scripts_1 = require("./default-scripts");
const default_styles_1 = require("./default-styles");
exports.Head = (props) => (react_1.default.createElement("head", null,
    react_1.default.createElement("meta", { charSet: 'utf-8' }),
    react_1.default.createElement("meta", { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
    react_1.default.createElement("meta", { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
    react_1.default.createElement("meta", { name: 'description', content: 'Aktuelle Badegew\u00E4sserqualit\u00E4t und Informationen rund um die Berliner Badestellen' }),
    react_1.default.createElement("link", { rel: 'apple-touch-icon', sizes: '128x128', href: '/assets/images/android-chrome-128x128.png' }),
    react_1.default.createElement("link", { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/images/apple-touch-icon.png' }),
    react_1.default.createElement("link", { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/images/favicon-32x32.png' }),
    react_1.default.createElement("link", { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/assets/images/android-chrome-192x192.png' }),
    react_1.default.createElement("link", { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/assets/images/android-chrome-256x256.png' }),
    react_1.default.createElement("link", { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/images/favicon-16x16.png' }),
    react_1.default.createElement("link", { rel: 'manifest', href: 'site.webmanifest' }),
    react_1.default.createElement("link", { rel: 'mask-icon', href: '/assets/images/safari-pinned-tab.svg', color: '#253276' }),
    react_1.default.createElement("meta", { name: 'apple-mobile-web-app-title', content: 'Berliner Badestellen' }),
    react_1.default.createElement("meta", { name: 'application-name', content: 'Berliner Badestellen' }),
    react_1.default.createElement("meta", { name: 'msapplication-TileColor', content: '#253276' }),
    react_1.default.createElement("meta", { name: 'msapplication-TileImage', content: '/assets/images/mstile-144x144.png' }),
    react_1.default.createElement("link", { type: 'text/plain', rel: 'author', href: '/humans.txt' }),
    react_1.default.createElement("link", { rel: 'icon', type: 'image/x-icon', href: '/assets/images/favicon.ico' }),
    react_1.default.createElement("link", { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/images/favicon.ico' }),
    react_1.default.createElement("link", { rel: 'icon', type: 'image/png', href: '/assets/images/favicon-32x32.png' }),
    react_1.default.createElement("meta", { name: 'theme-color', content: '#253276' }),
    react_1.default.createElement("title", null,
        'Flusshygiene ',
        props.title !== undefined ? ` | ${props.title}` : ''),
    react_1.default.createElement(default_styles_1.DefaultStyles, null),
    react_1.default.createElement(default_scripts_1.DefaultHeaderScripts, null)));
