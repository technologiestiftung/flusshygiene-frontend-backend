import cors from 'cors';
import errorHandler from 'errorhandler';
import express from 'express';
import * as reactViews from 'express-react-views';
import session from 'express-session';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import { Strategy as Auth0Strategy } from 'passport-auth0';
import path from 'path';
import { IQuestionFile } from './common/interfaces';
import { userInViews } from './middlewares/user-in-views';
import router from './router';
import { setupQuestions } from './setup';
// -------------------------------------------------
// Configure Passport to use Auth0
// console.log(process.env.NODE_ENV);
// console.log(process.env.AUTH0_CALLBACK_URL);
// console.log(process.env.AUTH0_CLIENT_ID);
// console.log(process.env.AUTH0_CLIENT_SECRET);
// console.log(process.env.AUTH0_DOMAIN);
const strategy = new Auth0Strategy(
  {
    callbackURL: process.env.AUTH0_CALLBACK_URL_DEV!,
    clientID: process.env.AUTH0_CLIENT_ID!,
    clientSecret: process.env.AUTH0_CLIENT_SECRET!,
    domain: process.env.AUTH0_DOMAIN!,
  },
  (_accessToken, _refreshToken, _extraParams, profile, done) => {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  },
);
const sessionOptions: session.SessionOptions = {
  cookie: { secure: process.env.NODE_ENV === 'production' ? true : false },
  name: process.env.FRONTEND_EXPRESS_SESSION_NAME || 'monky buisness',
  resave: true,
  saveUninitialized: false,
  secret: process.env.FRONTEND_EXPRESS_SESSION_SECRET || 'coding monkey',
};

passport.use(strategy);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const app = express();

app.use(cors());
app.use(helmet());

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(userInViews());
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
