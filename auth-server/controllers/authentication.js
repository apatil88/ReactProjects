const User = require('../models/user');

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
            res.json({success : true});
        });
    }); 
}