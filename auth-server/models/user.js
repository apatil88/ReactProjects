const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt   = require('bcrypt-nodejs');

//Define our model
const userSchema = new Schema({
    email : {type: String , unique: true, lowercase: true},  //before saving to the database, make sure that the email is unique
    password: String
});

//On Save Hook, encrypt password 
//Before saving the model, run this function
userSchema.pre('save', function(next){
    
    //get access to the user model
    const user = this;

    //generate a salt then run callback
    bcrypt.genSalt(10, function(err, salt){
        if(err){
            return next(err);
        }

        //hash (encrypt) password using the salt
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err){
                next(err);
            }
            //overwrite plain text password with encrypted password
            user.password = hash;

            //save the model
            next();
        });
    })
})

//Create the model class
const ModelClass = mongoose.model('user', userSchema);

//Export our model
module.exports = ModelClass;