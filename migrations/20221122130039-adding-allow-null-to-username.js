'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('users', 'userName', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('users', 'userName', {
      type: Sequelize.STRING,
      allowNull: true
    })
  }
}
