const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateformat');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },

    reactionBody: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 200
    },

    username: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (Timestamp) => dateFormat(Timestamp)
    }
});

module.exports = Reaction.Schema;