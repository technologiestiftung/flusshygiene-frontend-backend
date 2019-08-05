import Router from 'express-promise-router';
import passport from 'passport';
import querystring from 'querystring';
import util from 'util';
import { RouteNames, RouteParams } from './common/enums/index';
const router = Router();
import got = require('got');
import { secured } from './middlewares/secured';
import {
  bathingspot,
  // bathingspotEditor,
  index,
  info,
  question,
  questionnaire,
  questionPostHandle,
  report,
  userRoute,
} from './routes';
// import { } from './routes/route-bathingspot';

router.get(`/${RouteNames.index}`, index);
router.get(
  `/${RouteNames.bathingspot}/${RouteParams.bathingspotId}`,
  bathingspot,
);
router.get(`/${RouteNames.info}`, info);
router.get(`/${RouteNames.questionnaire}`, questionnaire);
router.get(`/${RouteNames.questionnaire}/${RouteParams.questionId}`, question);
router.post(
  `/${RouteNames.questionnaire}/${RouteParams.questionId}`,
  questionPostHandle,
);
router.get(`/${RouteNames.report}`, report);
// router.get(
//   `/${RouteNames.bathingspot}/${RouteParams.bathingspotId}/${RouteNames.editor}`,
//   bathingspotEditor,
// );

// see https://auth0.com/docs/quickstart/webapp/nodejs
// Perform the login, after login Auth0 will redirect to callback
router.get(
  '/login',
  passport.authenticate('auth0', {
    scope: 'openid email profile',
  }),
  (req, res) => {
    res.redirect('/');
  },
);

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', (req, res, next) => {
  passport.authenticate('auth0', (err, puser, pinfo) => {
    if (err) {
      return next(err);
    }
    if (!puser) {
      return res.redirect('/login');
    }
    req.logIn(puser, error => {
      if (error) {
        return next(error);
      }
      const returnTo = req.session!.returnTo;
      // delete req.session!.returnTo;
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

router.get('/user', secured(), userRoute);

router.get('/user/password-reset', secured(), async (request, response) => {
  try {
    const user = request.user;
    const resetUrl = new URL(
      util.format(
        'https://%s/dbconnections/change_password',
        process.env.AUTH0_DOMAIN,
      ),
    );
    const body = {
      client_id: process.env.AUTH0_CLIENT_ID,
      connection: 'Username-Password-Authentication',
      email: user.email,
    };

    const res = await got.post(resetUrl.href, {
      body: JSON.stringify(body),
    });
    console.log(res);
    response.redirect('/user');
  } catch (error) {
    throw error;
  }
});

export default router;
