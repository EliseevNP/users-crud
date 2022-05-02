import { dbConfig } from '../common/constants';

module.exports = {
  ...dbConfig,
  seederStorage: 'sequelize',
  migrationStorage: 'sequelize',
  seederStorageTableName: 'UsersCrudServiceSeeds',
  migrationStorageTableName: 'UsersCrudServiceMigrations',
  logging: false,
  minifyAliases: true,
  define: {
    freezeTableName: true,
  },
  sync: false,
};
