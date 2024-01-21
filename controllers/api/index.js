const router = require("express").Router();
const userRoutes = require("./user-Routes");
const postRoutes = require("./post-Routes");
const commentRoutes = require("./comment-Routes");

// Set up the routes
router.use("/users", userRoutes); // Routes for user-related functionality
router.use("/posts", postRoutes); // Routes for post-related functionality
router.use("/comments", commentRoutes); // Routes for comment-related functionality

module.exports = router;