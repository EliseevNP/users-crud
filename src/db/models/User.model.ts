import {
  Table,
  Column,
  DataType,
  AllowNull,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import BaseModel from './Base.model';

@Table({ tableName: 'users' })
export default class User extends BaseModel {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public userId!: number;

  @AllowNull(true)
  @Column(DataType.STRING)
  public username!: string | null;

  @AllowNull(true)
  @Column(DataType.STRING)
  public firstName!: string | null;

  @AllowNull(true)
  @Column(DataType.STRING)
  public lastName!: string | null;

  @AllowNull(true)
  @Column(DataType.STRING)
  public email!: string | null;

  @AllowNull(true)
  @Column(DataType.STRING)
  public phone!: string | null;
}
