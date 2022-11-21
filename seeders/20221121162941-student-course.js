'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('student_courses', [
      {
        studentId: 1,
        courseId: 1,
        grade: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 1,
        courseId: 2,
        grade: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {})
  }
}
