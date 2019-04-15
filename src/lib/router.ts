import Router from 'express-promise-router';
const router = Router();
import {bathingspot, index} from './routes/index';

router.get('/', index);
router.get('/bathingspots/:spotId([0-9]+)', bathingspot);
export default router;
