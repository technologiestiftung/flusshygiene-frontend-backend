import Router from 'express-promise-router';
import url from 'url';
import { RouteNames, RouteParams } from './common/enums/index';
import { AsyncRoute } from './common/types/index';
const router = Router();
import {
  bathingspot,
  index,
  info,
  question,
  questionnaire,
} from './routes/index';

router.get(`/${RouteNames.index}`, index);
router.get(`/${RouteNames.bathingspot}/${RouteParams.bathingspotId}`, bathingspot);
router.get(`/${RouteNames.info}`, info);
router.get(`/${RouteNames.questionnaire}`, questionnaire);
router.get(`/${RouteNames.questionnaire}/${RouteParams.questionId}`, question);

const postHandler: AsyncRoute = async (request, response) => {
  console.log('POST from FORM called');
  console.log(request.body);
  const targeturl = url.parse(request.body.targeturl);
  console.log(targeturl);
  if (targeturl.host !== null) {
    response.redirect(targeturl.href!);
  } else {
    response.redirect(request.url);

  }
};

router.post(`/${RouteNames.questionnaire}/${RouteParams.questionId}`, postHandler);
export default router;
