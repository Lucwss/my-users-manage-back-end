'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [
         {
            name: 'Lucas Emanoel',
            active: true,
            email: 'lucas@teste.com',
            role: 'admin',
            role_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
         }
      ], {});
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
   }
};
