const mongoose = require('mongoose');
/**
 * Schema: It helps to define the structure of the data in MongoDB Collections
 */
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ['admin', 'seller', 'buyer'],
        default: 'buyer'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
/**
 * Export the user collection using module.exports
 */

userSchema.pre('save', function(next) {
    //bcrypt for password hashing
    next();
});
module.exports = mongoose.model('user', userSchema);