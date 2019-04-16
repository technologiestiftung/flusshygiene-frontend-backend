"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const spot_body_addon_list_item_1 = require("./spot-body-addon-list-item");
const data = {
    bathrooms: {
        no: { image: 'https://via.placeholder.com/32', text: 'no' },
        yes: { image: 'https://via.placeholder.com/32', text: 'yes' },
    },
    bathroomsMobile: {
        no: { image: 'https://via.placeholder.com/32', text: 'no' },
        yes: { image: 'https://via.placeholder.com/32', text: 'yes' },
    },
    cyanoPossible: {
        no: { image: 'https://via.placeholder.com/32', text: 'no' },
        yes: { image: 'https://via.placeholder.com/32', text: 'yes' },
    },
    disabilityAccess: {
        no: { image: 'https://via.placeholder.com/32', text: 'no' },
        yes: { image: 'https://via.placeholder.com/32', text: 'yes' },
    },
    disabilityAccessBathrooms: {
        no: { image: 'https://via.placeholder.com/32', text: 'no' },
        yes: { image: 'https://via.placeholder.com/32', text: 'yes' },
    },
    dogban: {
        no: { image: 'https://via.placeholder.com/32', text: 'no' },
        yes: { image: 'https://via.placeholder.com/32', text: 'yes' },
    },
    hasDisabilityAccesableEntrence: {
        no: { image: 'https://via.placeholder.com/32', text: 'no' },
        yes: { image: 'https://via.placeholder.com/32', text: 'yes' },
    },
    lifeguard: {
        no: { image: 'https://via.placeholder.com/32', text: 'no' },
        yes: { image: 'https://via.placeholder.com/32', text: 'yes' },
    },
    parkingSpots: {
        no: { image: 'https://via.placeholder.com/32', text: 'no' },
        yes: { image: 'https://via.placeholder.com/32', text: 'yes' },
    },
    restaurant: {
        no: { image: 'https://via.placeholder.com/32', text: 'no' },
        yes: { image: 'https://via.placeholder.com/32', text: 'yes' },
    },
    snack: {
        no: { image: 'https://via.placeholder.com/32', text: 'no' },
        yes: { image: 'https://via.placeholder.com/32', text: 'yes' },
    },
    waterRescue: {
        no: { image: 'https://via.placeholder.com/32', text: 'no' },
        yes: { image: 'https://via.placeholder.com/32', text: 'yes' },
    },
};
exports.SpotBodyAddonList = (props) => (react_1.default.createElement("ul", null, Object.keys(props).map((key, i) => {
    if (props.hasOwnProperty(key) === true) {
        return (react_1.default.createElement(spot_body_addon_list_item_1.SpotBodyAddonListItem, { key: i, image: props[key] === true ? data[key].yes.image : data[key].no.image, text: `${key} === ${(props[key] === true ? data[key].yes.text : data[key].no.text)}` }));
    }
    return null;
})));
