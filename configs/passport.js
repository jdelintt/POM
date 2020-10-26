const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy
const User = require("./../models/user");


const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        // if there is a request and that requaet has data within the cookies
        token = req.cookies["access_token"]
    }
    return token;
}

// authorize
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "POM"
}, (payload, done) => {
    User.findById({_id : payload.sub}, (err, user) => {
        if (err) {
            // if theres an error
            return done(err, false)
        }
        if (user) {
            // if a user is found
            return done(null, user)
        }
        else {
            // if a user is not found
            return done(null, false)
        }
    })
}))

// authentication
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({username}, (err, user) => {
        if (err) {
            // something went qrong with databasse
            return done(err)
        }
        if (!user) {
            // if user does not exist
            return done(null, false);
        }
        else {
            // full steam ahead
            console.log(user)
            user.comparePassword(password, done)
        }
    })
}))