import Router from 'express-promise-router';
import { RouteNames, RouteParams } from './common/enums/index';
const router = Router();
import {
  bathingspot,
  index,
  info,
  question,
  questionnaire,
  questionPostHandle,
  report,
} from './routes/index';

router.get(`/${RouteNames.index}`, index);
router.get(`/${RouteNames.bathingspot}/${RouteParams.bathingspotId}`, bathingspot);
router.get(`/${RouteNames.info}`, info);
router.get(`/${RouteNames.questionnaire}`, questionnaire);
router.get(`/${RouteNames.questionnaire}/${RouteParams.questionId}`, question);
router.post(`/${RouteNames.questionnaire}/${RouteParams.questionId}`, questionPostHandle);
router.get(`/${RouteNames.report}`, report);
export default router;
