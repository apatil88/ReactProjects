const passport = require('passport');
const User     = require('../models/user');
const config   = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');  //Strategy for authentication using email and password

//Create a Local Strategy
const localOptions = { usernameField: 'email'}; //When username is needed, look at the email property in the request
const localLogin = new LocalStrategy(localOptions, function(email, password, done){

    //Verify this username and password, call done with the user if the username and password is correct, otherwise call done

    User.findOne({email: email}, function(err, user){
        if(err){
            return done(err);
        }

        if(!user){
            return done(null, false);   //User was not found
        }

        //compare passwords - if 'password' equals user.password
        user.comparePassword(password, function(err, isMatch){
            if(err){
                return done(err);
            }

            if(!isMatch){
                return done(null, false);
            }

            return done(null, user);
        })
    })
});

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


//Tell passport to use Strategies
passport.use(jwtLogin);
passport.use(localLogin);