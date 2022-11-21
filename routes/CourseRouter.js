const Router = require('express').Router()
const controller = require('../controllers/CourseController')
// const middleware = require('../middleware')

Router.get('/', controller.GetCourses)
Router.get('/:course_Id', controller.GetCourseById)
Router.post('/create', controller.CreateCourse)
Router.put('/:course_Id', controller.UpdateCourse)
Router.delete('/:course_Id', controller.DeleteCourse)

module.exports = Router
