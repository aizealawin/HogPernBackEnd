const Router = require('express').Router()
const controller = require('../controllers/CourseController')
// const middleware = require('../middleware')

Router.get('/', controller.GetCourses)
Router.get('/:student_Id', controller.GetCourseById)
Router.post('/create', controller.CreateCourse)
Router.put('/:student_Id', controller.UpdateCourse)
Router.delete('/:student_Id', controller.DeleteCourse)

module.exports = Router
