"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const index_1 = require("./common/enums/index");
const router = express_promise_router_1.default();
const index_2 = require("./routes/index");
router.get(`/${index_1.RouteNames.index}`, index_2.index);
router.get(`/${index_1.RouteNames.bathingspot}/${index_1.RouteParams.bathingspotId}`, index_2.bathingspot);
router.get(`/${index_1.RouteNames.info}`, index_2.info);
router.get(`/${index_1.RouteNames.questionnaire}`, index_2.questionnaire);
exports.default = router;
