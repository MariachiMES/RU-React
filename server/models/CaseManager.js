const Mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const caseManagerSchema = new Mongoose.Schema({
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
  is_teamLead: [
    {
      type: Boolean,
      trim: true,
      default: false,
    },
  ],

  caseload: [
    {
      type: String,
      trim: true,
    },
  ],
});

caseManagerSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

caseManagerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const CaseManager = Mongoose.model("CaseManager", caseManagerSchema);

module.exports = CaseManager;
