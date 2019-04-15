"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/*
CSS hamburger toggle
taken from https://github.com/TinyJSDeveloper/bulma-css-burger
bulma-css-burger by TinyJSDeveloper

thank you @TinyJSDeveloper
*/
exports.Navigation = () => (react_1.default.createElement("nav", { className: 'navbar', role: 'navigation', "aria-label": 'main navigation' },
    react_1.default.createElement("div", { className: 'navbar-brand' },
        react_1.default.createElement("a", { className: 'navbar-item', href: '/' },
            react_1.default.createElement("div", null, "Flusshygiene/Badegew\u00E4sser Logo"))),
    react_1.default.createElement("input", { type: 'checkbox', role: 'button', id: 'navbar-burger-toggle', className: 'navbar-burger-toggle is-hidden', "aria-label": 'menu', "aria-expanded": 'false', "data-target": 'navbarBasicExample' }),
    react_1.default.createElement("label", { htmlFor: 'navbar-burger-toggle', className: 'navbar-burger' },
        react_1.default.createElement("span", { "aria-hidden": 'true' }),
        react_1.default.createElement("span", { "aria-hidden": 'true' }),
        react_1.default.createElement("span", { "aria-hidden": 'true' })),
    react_1.default.createElement("div", { className: 'navbar-menu' },
        react_1.default.createElement("div", { className: 'navbar-start' },
            react_1.default.createElement("a", { href: '/', className: 'navbar-item' }, "Home"),
            react_1.default.createElement("a", { href: '/', className: 'navbar-item' }, "Umfrage")))));
