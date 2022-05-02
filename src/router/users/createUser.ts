import { Context } from 'koa';
import User from '../../db/models/User.model';

export default async (ctx: Context): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const createdUser = await User.create(ctx.request.body);

  ctx.body = createdUser;
};
