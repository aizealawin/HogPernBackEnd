const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const CourseRouter = require('./CourseRouter')
// const UserRouter = require('./UserRouter')
// const AuthRouter = require('./AuthRouter')

Router.use('/students', StudentRouter)
Router.use('/courses', CourseRouter)
// Router.use('/auth', AuthRouter)

module.exports = Router
