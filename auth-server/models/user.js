const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

//Define our model
const userSchema = new Schema({
    email : {type: String , unique: true, lowercase: true},  //before saving to the database, make sure that the email is unique
    password: String
});

//Create the model class
const ModelClass = mongoose.model('user', userSchema);

//Export our model
module.exports = ModelClass;