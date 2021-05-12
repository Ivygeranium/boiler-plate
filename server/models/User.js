const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
    name: {
        type: String, 
        maxlength: 50
    },
    email: {
        type: String, 
        trim: true, // remove space
        unique: 1
    }, 
    password: {
        type: String, 
        minlength: 5
    }, 
    lastname: {
        type: String, 
        maxlength: 50
    },
    role: {
        type: Number, 
        default: 0
    }, 
    image: String,
    token:{
        type: String, 
    },
    tokenExp: {
        type: Number
    }
});


userSchema.pre('save', function(next){
    var user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err, salt){
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash){
                if (err) return next(err)
                user.password = hash;
                next();
            })
        })
    }
    else next();
})

userSchema.methods.comparePassword = function(plainPassword, CBF) {
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return CBF(err)    
        CBF(null, isMatch);
    })
}

userSchema.methods.generateToken = function(CBF) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secretToken');

    user.token = token;
    user.save(function(err, user){
        if (err) return CBF(err)
        CBF(null, user);
    })
}

userSchema.statics.findByToken = function(token, CBF) {
    var user = this;   
    jwt.verify(token, 'secretToken', function(err, decoded){
        user.findOne({"_id": decoded, "token": token }, function(err, user){
            if (err) return CBF(err)
            CBF(null, user);
        })
    }) 
}


const User = mongoose.model('User', userSchema);

module.exports = { User };