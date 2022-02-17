const router = require("express").Router();
const UserController = require("../controllers/UserControllers");

//Update user
router.put("/:id", UserController.updateUser);
//Delete user
router.delete("/:id", UserController.deleteUser);
//Get a user
router.get("/", UserController.getUser);
//Get friends
router.get("/friends/:userId", UserController.getFriends);
//Follow a user
router.put("/:id/follow", UserController.followUser);
//Unfollow a user
router.put("/:id/unfollow", UserController.unfollowUser);

module.exports = router;
