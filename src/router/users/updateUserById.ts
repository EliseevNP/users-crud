import { Context } from 'koa';
import User from '../../db/models/User.model';
import { ClientError } from '../../common/errors';

export default async (ctx: Context): Promise<void> => {
  const updatingUser = await User.findByPk(ctx.params.userId);

  if (!updatingUser) {
    throw new ClientError('User not found', 400);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await updatingUser.update(ctx.request.body);

  ctx.body = updatingUser;
};
