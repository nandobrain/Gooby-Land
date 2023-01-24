const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema( {
    comment: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String
    }, {
      timestamps: true
})

const dogSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    breed: {
        type: String,
        required: true
    },

    birthdate: {
        type: Date,
        default: function() {
            return new Date().getFullYear()
        }
    },


    location: {
        type: String,
        required: true
    },

    bio: {
        type: String,
        required: true
    },

    park: {
        type: String
    },

    petStore: {
        type: String
    },

    snack: {
        type: String
    },
    veterinarian: {
        type: String
    },

    toy: {
        type: String
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String
    }, {
      timestamps: true
    })
    
    
    



    


module.exports = mongoose.model('Dog', dogSchema)