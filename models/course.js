'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * hi world
     */
    static associate(models) {
      Course.hasMany(models.Student, {
        as: 'student',
        through: models.Student_Course,
        foreignKey: 'studentId'
      })
    }
  }
  Course.init(
    {
      name: DataTypes.STRING,
      professor: DataTypes.STRING,
      grade: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses'
    }
  )
  return Course
}
