var userControler = require('./user.controller')

module.exports = (app) => {
    app.use('/user/signup', userControler.userSignup )
}