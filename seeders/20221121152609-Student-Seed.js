'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [
      {
        name: 'Kusal Tholka Mudalige',
        email: 'kusal@iscool.com',
        house: 'Gryffindor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jen Dunlap',
        email: 'chainsaw@chainsaw.com',
        house: 'Slytherin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Edward Yuabov',
        email: 'yuaboved@gmail.com',
        house: 'Hufflepuff',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aaron Sanchez',
        email: 'aaron@gamer.com',
        house: 'Hufflepuff',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {})
  }
}
