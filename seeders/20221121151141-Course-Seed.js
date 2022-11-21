'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
        name: 'Just Dark Arts',
        professor: 'Ben Manning',
        grade: 'Senior',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Transfiguration',
        professor: 'Austin Taylor',
        grade: 'Freshman',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {})
  }
}
