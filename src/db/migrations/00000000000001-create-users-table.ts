import { QueryInterface, DataTypes } from 'sequelize';
import { baseDictionaryFields } from '../../common/constants';

module.exports = {
  up: (queryInterface: QueryInterface) => queryInterface.createTable('users', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ...baseDictionaryFields,
  }),
  down: (queryInterface: QueryInterface) => queryInterface.dropTable('users'),
};
