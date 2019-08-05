import got from 'got';
import { IObject } from '../common/interfaces';
import { IUserProps } from '../common/interfaces/iviews';
import { isUserLoggedIn } from '../common/routes-commons';
import { AsyncRoute } from '../common/types';
import { API_HOST, API_MOUNT } from '../config';
import { routeErrorHandler } from './routes-error-handler';

// export const user = (req: express.Request, res: express.Response, next: express.NextFunction) => {
//   const { _raw, _json, ...userProfile } = req.user;
//   res.send({
//     title: 'Profile page',
//     userProfile: JSON.stringify(userProfile, null, 2),
//   });
// };

export const user: AsyncRoute = async (request, response) => {
  try {
    const { _raw, _json, ...userProfile } = request.user;

    let spots: IObject[] = [];
    if (isUserLoggedIn(request.app.locals.user) === true) {
      // console.log(request.app.locals.token);
      const headers = {
        Authorization: `${request.app.locals.token.token_type} ${request.app.locals.token.access_token}`,
      };
      // console.log(headers);
      const responseUserReq = await got(
        `${API_HOST}/${API_MOUNT}/users?auth0Id=${userProfile.id}`,
        { headers },
      );
      // console.log(responseUserReq);
      const json = JSON.parse(responseUserReq.body);
      // console.log('---------------');
      // console.log(userProfile.id);
      // console.log(responseUserReq.body);
      if (json.data.length > 0) {
        const user = json.data[0];
        // console.log(user);
        const responseSpotReq = await got(
          `${API_HOST}/${API_MOUNT}/users/${user.id}/bathingspots`,
          { headers },
        );
        // console.log(responseSpotReq);
        const parsedJson = JSON.parse(responseSpotReq.body);
        spots = parsedJson.data;
        // console.log(spots);
      }
    }
    const data: IUserProps = {
      isLoggedin: isUserLoggedIn(request.app.locals.user),
      title: 'User Profile Page',
      userProfile,
      spots,
    };
    response.render('user', data);
  } catch (error) {
    routeErrorHandler(`user`, error);
  }
};
