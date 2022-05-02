import Router from 'koa-router';
import getUserById from './getUserById';
import createUser from './createUser';
import deleteUserById from './deleteUserById';
import updateUserById from './updateUserById';
import middlewares from '../../middlewares';
import schemes from '../../schemes';

const router = new Router({ prefix: '/users' });

router.post(
  '/',
  middlewares.validate(schemes.users.createUser),
  createUser,
);

router.get(
  '/:userId',
  middlewares.validate(schemes.users.getUserById),
  getUserById,
);

router.delete(
  '/:userId',
  middlewares.validate(schemes.users.deleteUserById),
  deleteUserById,
);

router.put(
  '/:userId',
  middlewares.validate(schemes.users.updateUserById),
  updateUserById,
);

export default router;
