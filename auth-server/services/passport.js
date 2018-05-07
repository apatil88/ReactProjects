const passport = require('passport');
const User     = require('../models/user');
const config   = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//Set up options for JwtStrategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret     //secret string to obtain decoded token and pass in the payload
};  //where to look in the request to find the token (header, body, url)

//Create the JwtStrategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    //See if the UserID in our payload is in our database
    //If it is, then call done with that user
    //otherwise, call done without a user object

    User.findById(payload.sub, function(err, user){
        //If the search fails
        if(err){
            return done(err, false);
        }

        if(user){  //If we find the user after the search is performed
            return done(null, user);
        } else {  //If we cannot find the user after the search is performed
            return done(null, false);
        }

    })
})


//Tell passport to use this Strategy
passport.use(jwtLogin);