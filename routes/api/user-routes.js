const router = require('express').Router();

const {
    getUser,
    getUserByID,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

router.route('/')
.get(getUser)
.post(addUser);

router.route('/:id')
.get(getUserByID)
.put(updateUser)
.delete(deleteUser)

router.route('/:id/friends/:friendId')
.post(addFriend)
.delete(deleteFriend)

module.exports = router;