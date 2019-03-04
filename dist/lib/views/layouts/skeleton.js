"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.default = (props) => (react_1.default.createElement("html", null,
    react_1.default.createElement("head", null,
        react_1.default.createElement("title", null, props.title),
        react_1.default.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js" })),
    react_1.default.createElement("body", null,
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
        props.scripts)));
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
