const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");

const path = require("path");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  context: authMiddleware,
  formatError: (error) => error,
});
server.applyMiddleware({ app, path: "/graphql" });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use(
  "/images",
  express.static(path.join(__dirname, "../client/public/images"))
);

app.use("/", express.static(path.join(__dirname, "../client/src")));

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`
    Server is running!
    Listening on port ${PORT}
    Explore at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
