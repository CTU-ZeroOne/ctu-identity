const indexRouter = require('./index.route')
const usersRouter = require('./users.route')

module.exports = (CTU) => {
    CTU.use('/', indexRouter)
    CTU.use('/api/users', usersRouter)
}