const bodyParser = require("body-parser");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

const db = require("./config/connection");
const PORT = process.env.PORT || 5001;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();

app.use(bodyParser.json(), urlencodedParser);

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

app.use("/", express.static(path.join(__dirname, "../client/public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`
    Server is running!
    Listening on port ${PORT}
    Explore at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
