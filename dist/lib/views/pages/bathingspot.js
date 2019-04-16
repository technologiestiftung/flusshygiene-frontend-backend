"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../common/utils");
const spot_body_addon_list_1 = require("../components/bathingspot/spot-body-addon-list");
const spot_body_figure_1 = require("../components/bathingspot/spot-body-figure");
const spot_body_measurement_table_1 = require("../components/bathingspot/spot-body-measurement-table");
const spot_header_1 = require("../components/bathingspot/spot-header");
const map_1 = require("../components/map");
const skeleton_1 = require("../layouts/skeleton");
const bathingspot = (props) => {
    const { nameLong, water, image, district, street, name, postalCode, city, website, latitude, longitude, measurements, cyanoPossible, lifeguard, disabilityAccess, hasDisabilityAccesableEntrence, restaurant, snack, parkingSpots, bathrooms, disabilityAccessBathrooms, bathroomsMobile, dogban, } = props.spot;
    const str = JSON.stringify(props.spot);
    return (react_1.default.createElement(skeleton_1.Skeleton, { title: nameLong },
        react_1.default.createElement(map_1.Map, { str: 'Maps' }),
        react_1.default.createElement(spot_header_1.SpotHeader, { nameLong: nameLong, water: water, district: district }),
        react_1.default.createElement("div", { className: 'bathingspot__body' },
            react_1.default.createElement(spot_body_figure_1.SpotBodyFigure, { image: image, nameLong: nameLong, name: name, imageAuthor: undefined }),
            react_1.default.createElement("div", { className: 'bathingspot__body-location' },
                react_1.default.createElement("h3", null, "Anschrift"),
                react_1.default.createElement("p", null, nameLong),
                react_1.default.createElement("p", null, street),
                react_1.default.createElement("p", null,
                    postalCode,
                    " ",
                    city),
                (() => {
                    if (website.length > 0) {
                        // const reg = /^(http|https?)\:\/\//g;
                        return react_1.default.createElement("p", null,
                            react_1.default.createElement("a", { href: `${website}` }, website.replace(/^https?\:\/\//g, '').replace(/\/$/, '')));
                    }
                    return null;
                })(),
                react_1.default.createElement("p", null,
                    react_1.default.createElement("a", { href: `https://maps.google.com/maps?daddr=${longitude},${latitude}` }, "Route Berechnen"))),
            react_1.default.createElement("div", { className: 'bathingspot__body-measurement' },
                react_1.default.createElement("h3", null, "Wasserqualit\u00E4t"),
                (() => {
                    const sortedMeasurment = measurements.sort(utils_1.measurementSort);
                    //   (a, b) => {
                    //   return (new Date(a.date) as unknown as number) - (new Date(b.date) as unknown as number);
                    // }
                    // );
                    const dateOpts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    return (react_1.default.createElement("div", null,
                        react_1.default.createElement("p", null, `wasserqualitaet: (NOT YET PARSED TO TEXT) ${sortedMeasurment[0].wasserqualitaetTxt}`),
                        react_1.default.createElement("p", null,
                            "(Letzte Messung ",
                            new Date(sortedMeasurment[0].date).toLocaleDateString('de-DE', dateOpts),
                            ")")));
                })(),
                react_1.default.createElement(spot_body_measurement_table_1.MeasurementTable, { measurements: measurements }),
                react_1.default.createElement("div", { className: 'bathingspot__body-addon' },
                    react_1.default.createElement("h3", null, "Weitere Angaben zur Badesstelle"),
                    react_1.default.createElement(spot_body_addon_list_1.SpotBodyAddonList, { cyanoPossible: cyanoPossible, lifeguard: lifeguard, disabilityAccess: disabilityAccess, hasDisabilityAccesableEntrence: hasDisabilityAccesableEntrence, restaurant: restaurant, snack: snack, parkingSpots: parkingSpots, bathrooms: bathrooms, disabilityAccessBathrooms: disabilityAccessBathrooms, bathroomsMobile: bathroomsMobile, dogban: dogban })))),
        react_1.default.createElement("script", { dangerouslySetInnerHTML: {
                __html: `
        // some script
        document.addEventListener('DOMContentLoaded',function() {
          console.log(JSON.parse('${str}'))
        });
        `,
            } })));
};
exports.default = bathingspot;
