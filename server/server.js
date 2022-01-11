const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const path = require("path");

const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./models/user");

const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false});
app.use(bodyParser.json(), urlencodedParser);

const dbURI = 

mongoose.connect( dbURI, { useNewUrlParser:true, useUnifiedTopology:true})
.then((res) => {
  app.listen(process.env.PORT, () => console.log( "server is live"))
})
.catch(err => console.log(err))
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

app.post("/register", async(req, res)=>{
  const user = req.body;
  const TakenUserName = await User.findOne({username: user.username})
  const TakenEmail = await User.findOne({ email: user.email})

  if (TakenUserName || TakenEmail) {
    res.json ({message: "Username or Email has already been taken"})
  } else {
    user.password = await bcrypt.hash(req.body.password, 10)

    const dbUser = new User({
      username: user.username.toLowercase(),
      email: user.email.toLowercase(),
      passowrd: user.password
    })
    dbUser.save()
    res.json({message: "Success"})
  }
})

app.post("/login", (req, res) => {
  const userLoggingIn = req.body;
  User.findOne({ username: userLoggingIn.username})
  .then(dbUser => {
    if(!dbUser) {
      return res.json({
        message: "Invalid Username or Password"
      })
    }
    bcrypt.compare(userLoggingIn.password, dbUser.password)
    .then(isCorrect => {
      if ( isCorrect) {
        const payload = {
          id: dbUser._id,
          username: dbUser.username,
        }
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          {expiresIn: 86400},
          (err, token) => {
            if (err) return res.json({ message: err})
            return res.json({
              message: "Success",
              token: "Bearer" + token
            })
          }
        )
      } else {
        return res.json({
          message: "Invalid Username or Password"
        })
      }
    })
  })
})
function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"]?.split(' ')[1]
  if (token) {
    jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) =>{
      if (err) return res.json({
        isLoggedIn: false,
        message: "Failed to Authenticate"
      })
      req.user = {};
      req.user.id = decoded.id
      req.user.username = decoded.username
      next()
    })
  } else {
    res.json({ message: "Incorrect Token Given", isLoggedIn: false})
  }
}
app.get("/getUsername", verifyJWT, (req, res) =>{
  res.json({isLoggedIn: true, username: req.user.username})
})
server.applyMiddleware({ app, path: "/graphql" });

app.listen(4000, () => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at http://localhost:4000/graphql
  `);
});
