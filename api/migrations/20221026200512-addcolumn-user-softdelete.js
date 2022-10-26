'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.addColumn('Users', 'deletedAt', {
         type: Sequelize.DATE,
         allowNull: true

      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.removeColumn('Users', 'deletedAt');
   }
};
