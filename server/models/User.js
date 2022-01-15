const Mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Minor = require("./Minor");

const userSchema = new Mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  is_teamLead: {
    type: Boolean,
    trim: true,
    default: false,
  },

  caseload: [
    {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Minor",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = Mongoose.model("User", userSchema);

module.exports = User;
