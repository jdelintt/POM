const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6

    },
    email: {
        type: String,
      },
    role : {
        type : String,
        required : true
    },
    ADirFile : {
        type : String

    },
    ADirFileType : {
        type : String

    }

})

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        next()
    }
    if (this.password.length < 6) {
        return Promise.reject(
            new Error("Password must have at least 6 characters")
        );
    }
    return bcrypt.hash(this.password, 6).then(hash => {
        this.password = hash;
    })
})

userSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        }
        else {
            if (!isMatch) {
                return cb(null, isMatch);

            }
            else {
                return cb(null, this);

            }
        }
    });
}

const User = mongoose.model("User", userSchema);

module.exports = User;