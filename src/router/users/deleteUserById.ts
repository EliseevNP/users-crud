import { Context } from 'koa';
import User from '../../db/models/User.model';

export default async (ctx: Context): Promise<void> => {
  const destroyedRowsNumber = await User.destroy({ where: { userId: ctx.params.userId } });

  ctx.body = destroyedRowsNumber;
};
