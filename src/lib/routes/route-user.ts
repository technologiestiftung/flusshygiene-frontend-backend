import { IUserProps } from '../common/interfaces';
import { AsyncRoute } from '../common/types';
import { isUserLoggedIn } from '../common/routes-commons';
import { routeErrorHandler } from './routes-error-handler';
import got = require('got');
import { API_HOST, API_MOUNT } from '../config';

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

    // const spots = [];
    if(isUserLoggedIn(request.app.locals.user) === true){
      const headers = {
        'Authorization':`${request.app.locals.token.token_type} ${request.app.locals.token.access_token}`
      };
      const responseUserReq = await got(`${API_HOST}/${API_MOUNT}/users?auth0Id=${userProfile.id}`,
      {headers});
      // console.log(responseUserReq);
      const json = JSON.parse(responseUserReq.body);
      if(json.data.length > 0){
        const user = json.data[0];
        console.log(user);
        const responseSpotReq = await got(`${API_HOST}/${API_MOUNT}/users/${user.id}/bathingspots`,{headers});
        console.log(responseSpotReq);
        const jsonSpot = JSON.parse(responseSpotReq.body);
        console.log(jsonSpot);
      }
    }
    const data: IUserProps = {
      isLoggedin: isUserLoggedIn(request.app.locals.user),
      title: 'User Profile Page',
      userProfile,
    };
    response.render('user', data);
  } catch (error) {
    routeErrorHandler(`user`, error);

  }
};
