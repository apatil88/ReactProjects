const jwt  = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user){
    const timeStamp = new Date().getTime();
    // sub- JWT standard for subject (who this token is for)
    // iat- issued at time
    return jwt.encode({sub: user.id, iat: timeStamp}, config.secret);
}

exports.signin = function(req, res, next){
    //The user has already had their email and password authenticated by the time execution reaches here. We need to only provide a token

    res.send({token: tokenForUser(req.user)});  //req.user is coming from passport's done callback
}

exports.signup = function(req, res, next){

    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        return res.status(422).send({error: 'You must provide email and password'});
    }

    //See if a user with the give email exists
    User.findOne({email: email}, function(err, existingUser){
        if(err){
            return next(err);
        }

        //If a user with the email does exists, return an error
        if(existingUser){
            return res.status(422).send( { error: 'Email in use' });
        }

        //If a user with the email does not exists, create and save the user
        const user = new User({
            email: email,
            password: password
        });

        //Saves the record to the database
        user.save(function(err){
            if(err){
                return next(err);
            }

            //Respond to request indicating the user was created
            res.json({token: tokenForUser(user)});
        });
    }); 
}