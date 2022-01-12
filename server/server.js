const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const path = require("path");
const db = require("./config/connection");

const PORT = process.env.PORT || 5001;
const { typeDefs, resolvers } = require("./schemas");

const app = express();
const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,

  formatError: (error) => error,

  context: ({ req, res }) => {
    return {
      req,
      res,
    };
  },
});

app.use(bodyParser.json());
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

server.applyMiddleware({ app, path: "/graphql" });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`
    Server is running!
    Listening on port ${PORT}
    Explore at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
