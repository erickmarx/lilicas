const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy
const usersController = require('../usersController')

passport.use(new LocalStrategy({usernameField: 'user', passwordField: 'pwd', session: false}), async (user, pwd, done) => {
    

        try {
            const usuario = new usersController()
            const exists = await usuario.SearchUser(user)
            // new usersController().VerifyPwdHash(pwd, procurar.pwd)
            if(!exists){
                return done(null, false, {message: 'Usuario não encontrado'})
            }

            done(null, usuario)
        } catch (error) {
            done(error)
        }
        
})

passport.bearer(new BearerStrategy({usernameField: 'user', passwordField: 'pwd', session: false}), async (user, pwd, done) => {
    try {
        
    } catch (error) {
        
    }
})