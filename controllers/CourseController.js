const { Course } = require('../models')

const GetCourses = async (req, res) => {
  try {
    const courses = await Course.findAll()
    res.send(courses)
  } catch (error) {
    throw error
  }
}

const GetCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.course_Id)
    res.send(course)
  } catch (error) {
    throw error
  }
}

const CreateCourse = async (req, res) => {
  try {
    const course = await Course.create({ ...req.body })
    res.send(course)
  } catch (error) {
    throw error
  }
}

const UpdateCourse = async (req, res) => {
  try {
    const course = await course.update(
      { ...req.body },
      { where: { id: req.params.course_Id }, returning: true }
    )
    res.send(course)
  } catch (error) {
    throw error
  }
}

const DeleteCourse = async (req, res) => {
  try {
    let courseId = parseInt(req.params.course_Id)
    await Course.destroy({ where: { id: courseId } })
    res.send({
      msg: `Course with ID of ${courseId} Deleted`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCourses,
  GetCourseById,
  CreateCourse,
  UpdateCourse,
  DeleteCourse
}
