const { AuthenticationError } = require("apollo-server-express");
const { User, Minor } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("minors");
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("minor");
    },
    minors: async (parent, { minorId }) => {
      return Minor.find().populate("username");
    },
    minor: async (parent, { minorId }) => {
      return (await Minor.findById({ _id: minorId })).populate("minor");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log("add case manager mutation in schemas");
      const user = await User.create({
        username,
        email,
        password,
      });
      const token = signToken(user);

      return { token, user };
    },

    addMinor: async (parent, { uacname, a_number, intake, gender }) => {
      console.log("add MINOR mutation in schemas");
      const minor = await Minor.create({ uacname, a_number, intake, gender });
      return minor;
    },
    updateStatus: async (parent, { minorId }) => {
      console.log("updating status");
      const status = await Minor.findByIdAndUpdate(args, { minorId });
      return status;
    },
    removeMinor: async (parent, { minorId }) => {
      return Minor.findOneAndDelete(args, { _id: minorId });
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Email or Password!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect email or password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    // addSkill: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     {
    //       $addToSet: { skills: skill },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },

    // },
    // removeSkill: async (parent, { profileId, skill }) => {
    //   return User.findOneAndUpdate(
    //     { _id: profileId },
    //     { $pull: { skills: skill } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;
