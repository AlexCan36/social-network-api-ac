const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateformat');
const ReactionSchema = require('./reaction');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: 'String',
        required: 'Thought is required',
        minLenght: 1,
        maxLenght: 200
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (Timestamp) => dateFormat(Timestamp)
    },

    username: {
        type: String,
        required: true
    },
    reaction: [ReactionSchema],
},
        {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;




