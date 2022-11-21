'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsToMany(models.Course, {
        as: 'students',
        through: models.Student_Courses,
        foreignKey: 'courseId'
      })
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      house: DataTypes.STRING,
      courseId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'courses',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Student',
      tableName: 'students'
    }
  )
  return Student
}
