const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const signSchema = new Schema({

    signature : {
        type : String
    },
    timesStarted: {
        type: Array
    },
    timesEnded: {
        type: Array
    }, 
    timeEntered: {
        type: Date,
        default: Date.now()
    },
    whoSigned : {
        type : String
    },
    username : {
        type : String

    },
    trimmedURI : {
        type : String
    }


})


const Signature = mongoose.model("SignatureTrail", signSchema);

module.exports = Signature;