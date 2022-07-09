const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is Required'
    },

    email: {
        type: String,
        trim: true,
        required: 'email is Required',
        minlength: 7,
        unique: true
    },

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]

},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    });

const User = model('User', UserSchema);

module.exports = User;
