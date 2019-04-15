"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const router = express_promise_router_1.default();
const index_1 = require("./routes/index");
router.get('/', index_1.index);
router.get('/bathingspots/:spotId([0-9]+)', index_1.bathingspot);
exports.default = router;
