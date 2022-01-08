const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const caseManagerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Not a valid Email Address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  is_teamLead: [
    {
      type: String,
      trim: true,
    },
  ],
  team_lead: {
    type: String,
    trim: true,
  },
  caseload: {
    type: String,
    trim: true,
  },
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

const CaseManager = model("Profile", caseManagerSchema);

module.exports = CaseManager;
