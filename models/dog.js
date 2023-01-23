const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    dog: {
        type: String,
        required: true
    },

    breed: {
        type: String,
        required: true
    },

    birthdate: {
        type: Number,
        default: function() {
            return new Date().getFullYear()
        }
    },

    breed: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },



    

})