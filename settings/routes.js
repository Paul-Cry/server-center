'use strict'

module.exports = (app) => {
    const passport = require('passport')
    const usersController = require('./../Controller/UsersController')

    

    app
        .route('/api/auth/signup')
        .post(usersController.signup)

    app
        .route('/api/auth/signin')
        .get(usersController.signin)

    app
        .route('/api/users')
        .get(passport.authenticate('jwt', { session: false }), usersController.getAllUsers)
        

    app
        .route('/api/form')
        .get(usersController.form)

    app
        .route('/api/form_add')
        .post(usersController.form_add)
}