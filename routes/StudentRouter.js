const Router = require('express').Router()
const controller = require('../controllers/StudentController')
// const middleware = require('../middleware')

Router.get('/', controller.GetStudents)
Router.get('/:student_Id', controller.GetStudentById)
Router.post('/create', controller.CreateStudent)
Router.put('/:student_Id', controller.UpdateStudent)
Router.delete('/:student_Id', controller.DeleteStudent)

module.exports = Router
