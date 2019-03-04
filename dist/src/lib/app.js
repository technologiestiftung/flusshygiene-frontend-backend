"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
const cors_1 = __importDefault(require("cors"));
const errorhandler_1 = __importDefault(require("errorhandler"));
const express_1 = __importDefault(require("express"));
const reactViews = __importStar(require("express-react-views"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// import Bundler from 'parcel-bundler';
const path_1 = __importDefault(require("path"));
const routes = __importStar(require("./routes"));
// -------------------------------------------------
const app = express_1.default();
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(morgan_1.default('dev'));
if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler_1.default());
    // const bundler  = new Bundler(path.resolve(__dirname, '../../src-public/assets/js/index.js'),
    // {
    //   cache: false,
    //   outDir: path.resolve(__dirname, '../../src-public/assets/js/'),
    //   outFile: 'index.bundle.js',
    // });
    // app.use(bundler.middleware());
}
app.use(express_1.default.static(path_1.default.join(__dirname, '../../public')));
app.set('views', path_1.default.join(__dirname, '../../views'));
app.engine('tsx', reactViews.createEngine({ beautify: true }));
app.set('view engine', 'tsx');
// app.get('/*', (request, response) => {
//   response.send(`${request.url}`);
// });
app.get('/', routes.index);
module.exports = app;
