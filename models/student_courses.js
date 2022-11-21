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
      studentId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
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
