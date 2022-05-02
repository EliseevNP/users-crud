import { Context } from 'koa';
import { ClientError } from '../../common/errors';
import User from '../../db/models/User.model';

export default async (ctx: Context): Promise<void> => {
  const user = await User.findByPk(ctx.params.userId);

  if (!user) {
    throw new ClientError('User not found', 400);
  }

  ctx.body = user;
};
