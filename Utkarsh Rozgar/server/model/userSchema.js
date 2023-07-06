const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    token: {
        type: String
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    aadhar: {
        type: Number,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    maritial_status: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
});


// hashing users passwords
schema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bycrypt.hash(this.password, 12);
        this.confirmPassword = await bycrypt.hash(this.confirmPassword, 12);
    }
    next();
});

const User = mongoose.model('User', schema);

module.exports = User;