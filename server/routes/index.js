const AuthRoute = require("./AuthRoute");
const ConversationsRoute = require("./ConversationsRoute");
const MessagesRoute = require("./MessagesRoute");
const PostsRoute = require("./PostsRoute");
const UsersRoute = require("./UsersRoute");

const router = function (app) {
  app.use("/auth", AuthRoute);
  app.use("/conversations", ConversationsRoute);
  app.use("/messages", MessagesRoute);
  app.use("/posts", PostsRoute);
  app.use("/users", UsersRoute);
};

module.exports = router;
