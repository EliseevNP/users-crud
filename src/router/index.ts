import Router from 'koa-router';
import common from './common';
import users from './users';

const router = new Router();

router.use(common.routes(), common.allowedMethods());
router.use(users.routes(), users.allowedMethods());

export default router;
