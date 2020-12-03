// Models folder contains the schema/storage format of users,categories,etc
// Common-middleware is for similar functions being used in user and admin side of the app
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

// This is the Schema/Structure of all users details as it'll be stored in the Database
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: true, //Fix the hash password part
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    contactNumber: {
        type: String
    },
    profilePicture: {
        type: String
    },
}, { timestamps: true });

// A function to hide the password
//userSchema.virtual('password')
//    .set(function (password) {
//       this.hash_password = bcrypt.hashSync(password, 10); //10 is the physical strength of the password also called as salt
//        console.log(error);
//  });

userSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
});

userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compare(password, this.hash_password);
    },
};



module.exports = mongoose.model('User', userSchema);