const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 10,
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
    },
    password: {
        type: String,
        minlength: 5,
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },
});

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                return next(err);
            }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    return next(err);
                }
                this.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

userSchema.methods.generateToken = function (cb) {
    const token = jwt.sign(this._id.toHexString(), 'secretToken');
    this.token = token;
    this.save(function (err, user) {
        if (err) {
            return cb(err);
        }
        cb(null, user);
    });
};

userSchema.statics.findByToken = function (token, cb) {
    jwt.verify(token, 'secretToken', (err, decoded) => {
        this.findOne({ _id: decoded, token: token }, (err, user) => {
            if (err) {
                return cb(err);
            }
            cb(null, user);
        });
    });
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
