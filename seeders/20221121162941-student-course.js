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
        grade: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 1,
        courseId: 4,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 2,
        courseId: 4,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 2,
        courseId: 2,
        grade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 2,
        courseId: 5,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 3,
        courseId: 5,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 3,
        courseId: 6,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 3,
        courseId: 4,
        grade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 4,
        courseId: 5,
        grade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 4,
        courseId: 4,
        grade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 4,
        courseId: 2,
        grade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 5,
        courseId: 3,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 5,
        courseId: 5,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 5,
        courseId: 6,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 5,
        courseId: 2,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 6,
        courseId: 2,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 6,
        courseId: 5,
        grade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 6,
        courseId: 1,
        grade: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 7,
        courseId: 3,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 7,
        courseId: 4,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 7,
        courseId: 6,
        grade: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 8,
        courseId: 6,
        grade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 8,
        courseId: 5,
        grade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 8,
        courseId: 3,
        grade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 9,
        courseId: 5,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 9,
        courseId: 6,
        grade: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 9,
        courseId: 2,
        grade: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 10,
        courseId: 2,
        grade: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 10,
        courseId: 1,
        grade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 10,
        courseId: 5,
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {})
  }
}
