const router = require("express").Router();
const PostController = require("../controllers/PostControllers");

//Create post
router.post("/", PostController.createPost);
//Get post
router.get("/:id", PostController.getPost);
//Update post
router.put("/:id", PostController.updatePost);
//Delete post
router.delete("/:id", PostController.deletePost);
//Like/dislike post
router.put("/:id/like", PostController.likePost);
//Get all posts
router.get("/profile/:username", PostController.getUserPosts);
//Get timeline posts
router.get("/timeline/:userId", PostController.getTimelinePosts);

module.exports = router;
