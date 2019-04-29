import cors from 'cors';
import errorHandler from 'errorhandler';
import express from 'express';
import * as reactViews from 'express-react-views';
import session from 'express-session';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { IQuestionFile } from './common/interfaces';
import router from './router';
import { setupQuestions } from './setup';

// -------------------------------------------------

const app = express();
app.use(cors());
app.use(helmet());
app.use(session(
  {
    name: process.env.FRONTEND_EXPRESS_SESSION_NAME || 'monky buisness',
    resave: true,
    saveUninitialized: false,
    secret: process.env.FRONTEND_EXPRESS_SESSION_SECRET || 'coding monkey',
},
));
app.use(express.urlencoded({extended: true}));
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
app.engine('js', reactViews.createEngine({ beautify: true }));
app.set('view engine', 'js');

const pQuestions = setupQuestions();
pQuestions.then((files: IQuestionFile[] | undefined) => {
  app.locals.questions = files;
  process.stdout.write('\nQuestion file import ready\n');
}).catch((error) => {
  if (error) {
    console.error(error);
  }
});
// app.get('/*', (request, response) => {
//   response.send(`${request.url}`);
// });

app.use(router);
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  // console.log(typeof err);
  // if (err) {
  res.status(404).send(`Sorry 404 on ${req.url}`);
  // } else {
  // }
});
export = app;
