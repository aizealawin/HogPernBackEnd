'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('student_courses', 'studentId', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'students',
        key: 'id'
      }
    })
    await queryInterface.changeColumn('student_courses', 'courseId', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'students',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('student_courses', 'studentId', {
      type: Sequelize.INTEGER
    })
    await queryInterface.changeColumn('student_courses', 'courseId', {
      type: Sequelize.INTEGER
    })
  }
}
