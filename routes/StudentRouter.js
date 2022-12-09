const Router = require('express').Router()
const controller = require('../controllers/StudentController')
const middleware = require('../middleware')

Router.get('/', controller.GetStudents)
Router.get('/:student_Id', controller.GetStudentById)
Router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateStudent
)
Router.put(
  '/:student_Id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateStudent
)
Router.delete(
  '/:student_Id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteStudent
)

module.exports = Router
