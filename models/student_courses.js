'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student_Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_Courses.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'students',
          key: 'id'
        }
      },
      courseId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'courses',
          key: 'id'
        }
      },
      grade: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Student_Courses',
      tableName: 'student_courses'
    }
  )
  return Student_Courses
}
