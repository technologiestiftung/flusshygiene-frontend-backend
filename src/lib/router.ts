import Router from 'express-promise-router';
import passport from 'passport';
import querystring from 'querystring';
import util from 'util';
import { RouteNames, RouteParams } from './common/enums/index';
const router = Router();
import { secured } from './middlewares/secured';
import {
  bathingspot,
  index,
  info,
  question,
  questionnaire,
  questionPostHandle,
  report,
  user,
} from './routes/index';

router.get(`/${RouteNames.index}`, index);
router.get(`/${RouteNames.bathingspot}/${RouteParams.bathingspotId}`, bathingspot);
router.get(`/${RouteNames.info}`, info);
router.get(`/${RouteNames.questionnaire}`, questionnaire);
router.get(`/${RouteNames.questionnaire}/${RouteParams.questionId}`, question);
router.post(`/${RouteNames.questionnaire}/${RouteParams.questionId}`, questionPostHandle);
router.get(`/${RouteNames.report}`, report);

// see https://auth0.com/docs/quickstart/webapp/nodejs
// Perform the login, after login Auth0 will redirect to callback
router.get('/login', passport.authenticate('auth0', {
  scope: 'openid email profile',
}), (req, res) => {
  res.redirect('/');
});

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', (req, res, next) => {
  passport.authenticate('auth0', (err, puser, pinfo) => {
    if (err) {
      return next(err);
    }
    if (!puser) {
      return res.redirect('/login');
    }
    req.logIn(puser, (error) => {
      if (error) {
        return next(error);
      }
      const returnTo = req.session!.returnTo;
      delete req.session!.returnTo;
      res.redirect(returnTo || '/user');
    });
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();

  let returnTo = req.protocol + '://' + req.hostname;
  const port = req.connection.localPort;
  if (port !== undefined && port !== 80 && port !== 443) {
    returnTo += ':' + port;
  }
  const logoutURL = new URL(
    util.format('https://%s/logout', process.env.AUTH0_DOMAIN),
  );
  const searchString = querystring.stringify({
    client_id: process.env.AUTH0_CLIENT_ID,
    returnTo,
  });
  logoutURL.search = searchString;

  res.redirect(logoutURL.href);
});

router.get('/user', secured(), user);

export default router;
