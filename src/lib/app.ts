import cors from 'cors';
import errorHandler from 'errorhandler';
import express from 'express';
import * as reactViews from 'express-react-views';
import helmet from 'helmet';
import morgan from 'morgan';
// import Bundler from 'parcel-bundler';
import path from 'path';
import router from './router';

// -------------------------------------------------

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
  // const bundler  = new Bundler(path.resolve(__dirname, '../../src-public/assets/js/index.js'),
  // {
  //   cache: false,
  //   outDir: path.resolve(__dirname, '../../src-public/assets/js/'),
  //   outFile: 'index.bundle.js',
  // });
  // app.use(bundler.middleware());
}

app.use(express.static(path.join(__dirname, '../../public')));

app.set('views', path.join(__dirname, './views/pages'));
app.engine('js', reactViews.createEngine({beautify: true}));
app.set('view engine', 'js');

// app.get('/*', (request, response) => {
//   response.send(`${request.url}`);
// });
app.use(router);

export = app;
