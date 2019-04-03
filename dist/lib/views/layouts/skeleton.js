"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const footer_1 = require("../components/footer");
const head_1 = require("../components/head");
const header_1 = require("../components/header");
exports.Skeleton = (props) => (react_1.default.createElement("html", { lang: 'de' },
    react_1.default.createElement(head_1.Head, { title: props.title }),
    react_1.default.createElement("body", null,
        react_1.default.createElement(header_1.Header, null),
        react_1.default.createElement("main", null, props.children),
        props.styles,
        react_1.default.createElement("script", { dangerouslySetInnerHTML: {
                __html: `
        // some script
        document.addEventListener('DOMContentLoaded',function() {
          console.log('skeleton view')
        });
        `,
            } }),
        props.scripts,
        react_1.default.createElement(footer_1.Footer, null))));
/*
// class Skeleton extends React.Component<ISkeleton> {
//   public render() {
//     return (
//       <html>
//         <head>
//           <title>{this.props.title}</title>

//         </head>
//         <body>
//           <main>{this.props.children}</main>
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//               // some script
//               document.addEventListener('DOMContentLoaded',function() {
//                 console.log('skeleton view')
//               });
//               `,
//             }}
//           />
//         </body>
//       </html >
//     );
//   }
// }

// export = Skeleton;
*/
