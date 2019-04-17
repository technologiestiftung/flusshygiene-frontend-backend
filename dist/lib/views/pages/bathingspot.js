"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import { WaterqualityStateText } from '../../common/enums';
const enums_1 = require("../../common/enums");
const spot_body_addon_list_1 = require("../components/bathingspot/spot-body-addon-list");
const spot_body_figure_1 = require("../components/bathingspot/spot-body-figure");
const spot_body_location_1 = require("../components/bathingspot/spot-body-location");
const spot_body_measurement_1 = require("../components/bathingspot/spot-body-measurement");
const spot_body_measurement_table_1 = require("../components/bathingspot/spot-body-measurement-table");
const spot_header_1 = require("../components/bathingspot/spot-header");
const map_1 = require("../components/map");
const skeleton_1 = require("../layouts/skeleton");
const bathingspot = (props) => {
    const { nameLong, water, image, district, street, name, postalCode, city, website, latitude, longitude, measurements, cyanoPossible, lifeguard, disabilityAccess, hasDisabilityAccesableEntrence, restaurant, snack, parkingSpots, bathrooms, disabilityAccessBathrooms, bathroomsMobile, dogban, hasPrediction, } = props.spot;
    const str = JSON.stringify(props.spot);
    return (react_1.default.createElement(skeleton_1.Skeleton, { title: nameLong },
        react_1.default.createElement(map_1.Map, { str: 'Maps' }),
        react_1.default.createElement(spot_header_1.SpotHeader, { nameLong: nameLong, water: water, district: district }),
        react_1.default.createElement("div", { className: 'bathingspot__body' },
            react_1.default.createElement(spot_body_figure_1.SpotBodyFigure, { image: image, nameLong: nameLong, name: name, imageAuthor: undefined }),
            react_1.default.createElement(spot_body_location_1.SpotBodyLocation, { nameLong: nameLong, street: street, postalCode: postalCode, city: city, website: website, longitude: longitude, latitude: latitude }),
            react_1.default.createElement(spot_body_measurement_1.Measurement, { measurements: measurements, hasPrediction: hasPrediction },
                react_1.default.createElement(spot_body_measurement_table_1.MeasurementTable, { measurements: measurements }),
                (() => {
                    if (hasPrediction === true) {
                        return (react_1.default.createElement("div", { className: 'bathingspot__body-prediction' },
                            react_1.default.createElement("p", null,
                                react_1.default.createElement("img", { src: 'https://via.placeholder.com/32', alt: 'prediction icon' }),
                                react_1.default.createElement("span", { className: 'asteriks' }, "*"),
                                " Die hier angezeigte Bewertung wird unterst\u00FCtzt durch eine neuartige tagesaktuelle Vorhersagemethode. ",
                                react_1.default.createElement("a", { href: `/${enums_1.RouteNames.info}` }, "Erfahren Sie mehr\u00A0\u00BB"))));
                    }
                    return null;
                })(),
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
