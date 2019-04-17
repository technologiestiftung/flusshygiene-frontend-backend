"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiURLS;
(function (ApiURLS) {
    ApiURLS["getBathingspots"] = "bathingspots";
})(ApiURLS = exports.ApiURLS || (exports.ApiURLS = {}));
exports.WaterqualityStateText = {
    1: 'Zum Baden geeignet',
    2: 'Zum Baden geeignet',
    11: 'Zum Baden geeignet',
    12: 'Zum Baden geeignet',
    3: 'Vom Baden wird abgeraten',
    4: 'Vom Baden wird abgeraten',
    13: 'Vom Baden wird abgeraten',
    14: 'Vom Baden wird abgeraten',
    10: 'Vom Baden wird abgeraten',
    9: 'Keine Angabe',
    5: 'Badeverbot',
    6: 'Badeverbot',
    15: 'Badeverbot',
    16: 'Badeverbot',
};
var RouteNames;
(function (RouteNames) {
    RouteNames["bathingspot"] = "badestellen";
    RouteNames["index"] = "";
    RouteNames["info"] = "info";
    RouteNames["questionnaire"] = "umfrage";
})(RouteNames = exports.RouteNames || (exports.RouteNames = {}));
var RouteParams;
(function (RouteParams) {
    RouteParams["bathingspotId"] = ":spotId([0-9]+)";
})(RouteParams = exports.RouteParams || (exports.RouteParams = {}));
