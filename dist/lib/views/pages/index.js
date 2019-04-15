"use strict";
// ██╗   ██╗██╗███████╗██╗    ██╗███████╗
// ██║   ██║██║██╔════╝██║    ██║██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║███████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════██║
//  ╚████╔╝ ██║███████╗╚███╔███╔╝███████║
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚══════╝
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const card_1 = require("../components/bathingspot/card");
const map_1 = require("../components/map");
const skeleton_1 = require("../layouts/skeleton");
const Styles = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("link", { rel: 'stylesheet', type: 'text/css', href: 'assets/css/extra.css' })));
const Scripts = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("script", { src: 'assets/js/extra.js' })));
// this is only for initial state.
// does not work as a reacitve app
// react is only for temaplting
// const state = {
//     count: 0,
//   };
const index = (props) => (react_1.default.createElement(skeleton_1.Skeleton, { title: props.title, styles: react_1.default.createElement(Styles, null), scripts: react_1.default.createElement(Scripts, null) },
    react_1.default.createElement(map_1.Map, { str: 'This is the map component' }),
    react_1.default.createElement("h2", null, "\u00DCbersicht Badegew\u00E4sser"),
    react_1.default.createElement("p", null,
        "Bei den mit ",
        react_1.default.createElement("span", { className: 'asteriks' }, "*"),
        " ausgezeichneten Badestellen wird die Bewertung durch ein Vorhersagemodel unterst\u00FCtzt."),
    react_1.default.createElement("ul", { className: 'list' }, props.spots.map((obj, i) => {
        return react_1.default.createElement(card_1.Card, { title: obj.name, water: obj.water, id: obj.id, image: obj.image, hasPrediction: obj.hasPrediction, key: i });
    }))));
exports.default = index;
// export class Index extends React.Component<IIndex> {
//   // can only be used to initilize things no reactive things work
//   public state = {
//     count: 5,
//   };
//   public render() {
//     return (
//       <Skeleton
//       title={this.props.title}
//       styles={<Styles />}
//       scripts={<Scripts />}
//       >
//       Fooooooo
//         <h1>{this.props.title}</h1>
//         <p>{this.state.count}</p>
//         <p>{this.props.spots[0]}</p>
//         {
//           this.props.spots.map((str) => {
//           return <Item str={str} />;
//         })
//         }
//         <div className='message'></div>
//         <button className='button'>press me</button>
//       </Skeleton>
//     );
//   }
// }
// export = Index;
