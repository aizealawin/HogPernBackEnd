const { Student } = require('../models')

const GetStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

const GetStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.post_Id)
    res.send(student)
  } catch (error) {
    throw error
  }
}

const CreateStudent = async (req, res) => {
  try {
    const student = await Student.create({ ...req.body })
    res.send(student)
  } catch (error) {
    throw error
  }
}

const UpdateStudent = async (req, res) => {
  try {
    const student = await Student.update(
      { ...req.body },
      { where: { id: req.params.student_Id }, returning: true }
    )
    res.send(student)
  } catch (error) {
    throw error
  }
}

const DeleteStudent = async (req, res) => {
  try {
    let studentId = parseInt(req.params.student_Id)
    await Student.destroy({ where: { id: studentId } })
    res.send({
      msg: `Student with ID of ${studentId} Deleted`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetStudents,
  GetStudentById,
  CreateStudent,
  UpdateStudent,
  DeleteStudent
}
