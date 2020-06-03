const mongoose = require('mongoose');
 
var UserSchema = new mongoose.Schema({

    userID: Number,
    username: String,
    password: String,
    email: String,
    isPremium: Boolean,
    tier: Number,
    preferences: String,
    wishlist: String,
    messages: String,
    ads: String
}); 

var  UserModel = mongoose.model('User', UserSchema, 'Users');

module.exports = UserModel;