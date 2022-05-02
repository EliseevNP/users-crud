/* eslint-disable max-classes-per-file */
import {
  Schema,
  getSchema,
  Number,
  String,
  Email,
} from 'fastest-validator-decorators';

@Schema(true)
export class GetUserByIdParams {
  @Number({
    optional: false,
    integer: true,
    convert: true,
    positive: true,
  })
  userId!: number;
}

@Schema(true)
export class CreateUserParams {
  @String({ optional: true, empty: false })
  username?: string | null;

  @String({ optional: true, empty: false })
  firstName?: string | null;

  @String({ optional: true, empty: false })
  lastName?: string | null;

  @Email({ optional: true })
  email?: string | null;

  @String({ optional: true, empty: false })
  phone?: string | null;
}

@Schema(true)
export class DeleteUserByIdParams {
  @Number({
    optional: false,
    integer: true,
    convert: true,
    positive: true,
  })
  userId!: number;
}

@Schema(true)
export class UpdateUserByIdParams {
  @Number({
    optional: false,
    integer: true,
    convert: true,
    positive: true,
  })
  userId!: number;
}

@Schema(true)
export class UpdateUserByIdBodyParams {
  @String({ optional: true, empty: false })
  username?: string | null;

  @String({ optional: true, empty: false })
  firstName?: string | null;

  @String({ optional: true, empty: false })
  lastName?: string | null;

  @Email({ optional: true })
  email?: string | null;

  @String({ optional: true, empty: false })
  phone?: string | null;
}

export default {
  getUserById: { params: getSchema(GetUserByIdParams) },
  createUser: { body: getSchema(CreateUserParams) },
  deleteUserById: { params: getSchema(DeleteUserByIdParams) },
  updateUserById: {
    params: getSchema(UpdateUserByIdParams),
    body: getSchema(UpdateUserByIdBodyParams),
  },
};
