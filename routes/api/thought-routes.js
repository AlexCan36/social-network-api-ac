const router = require('express').Router();

const {
    getThoughts,
    getThoughtByID,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router.route('/')
.get(getThoughts)

router.route('/:userId')
.post(addThought)

router.route('/:thoughtId')
.get(getThoughtByID)
.put(updateThought)
.delete(deleteThought)

router.route('/:thoughtId/reaction')
.post(addReaction)

router.route('/:thoughtId/reaction/:reactionId')
.delete(deleteReaction)

module.exports = router;