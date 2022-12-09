const Router = require('express').Router()
const controller = require('../controllers/CourseController')
const middleware = require('../middleware')

Router.get('/', controller.GetCourses)
Router.get('/:course_Id', controller.GetCourseById)

Router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCourse
)

Router.put(
  '/:course_Id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCourse
)

Router.delete(
  '/:course_Id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCourse
)

module.exports = Router
