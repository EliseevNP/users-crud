import { QueryInterface } from 'sequelize';

export = {
  up: (queryInterface: QueryInterface) => queryInterface.bulkInsert('users', [
    {
      username: 'superuser',
      first_name: 'superuser name',
      last_name: 'superuser last name',
      email: 'superuser@gmail.com',
      phone: '+79990001122',
    },
    {
      username: 'adminuser',
      first_name: 'adminuser name',
      last_name: 'adminuser last name',
      email: 'adminuser@gmail.com',
      phone: '+79990003344',
    },
    {
      username: 'guestuser',
      first_name: 'guestuser name',
      last_name: 'guestuser last name',
      email: 'guestuser@gmail.com',
      phone: '+79990005566',
    },
  ]),
  down: async (queryInterface: QueryInterface) => {
    const { sequence_name: sequenceName } = await queryInterface.sequelize.query(
      "SELECT pg_get_serial_sequence('users', 'user_id') AS sequence_name",
      { plain: true },
    );

    if (sequenceName) {
      await queryInterface.sequelize.query(`ALTER SEQUENCE ${sequenceName} RESTART WITH 1`);
    }

    await queryInterface.bulkDelete('users', {});
  },
};
