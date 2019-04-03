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
const item_1 = require("../components/item");
const skeleton_1 = require("../layouts/skeleton");
const Styles = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("link", { rel: 'stylesheet', type: 'text/css', href: 'assets/css/extra.css' })));
const Scripts = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("script", { src: 'assets/js/extra.js' })));
// this is only for initial state.
// does not work as a reacitve app
// react is only for temaplting
const state = {
    count: 0,
};
const index = (props) => (react_1.default.createElement(skeleton_1.Skeleton, { title: props.title, styles: react_1.default.createElement(Styles, null), scripts: react_1.default.createElement(Scripts, null) },
    react_1.default.createElement("h1", null, props.title),
    react_1.default.createElement("p", null, state.count),
    react_1.default.createElement("p", null, props.spots),
    props.spots.map((str) => {
        return react_1.default.createElement(item_1.Item, { str: str });
    }),
    react_1.default.createElement("div", { className: 'message' }),
    react_1.default.createElement("button", { className: 'button' }, "press me")));
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
