'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
        name: 'Just Dark Arts',
        instructor: 'Ben Manning',
        grade: 'Senior'
      },
      {
        name: 'Transfiguration',
        instructor: 'Austin Taylor',
        grade: 'Freshman'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
