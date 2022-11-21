'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('students', 'courseId')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('students', 'courseId', {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'courses',
        key: 'id'
      }
    })
  }
}
