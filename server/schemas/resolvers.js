const { AuthenticationError } = require("apollo-server-express");
const { CaseManager, Minor } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    casemanagers: async () => {
      return CaseManager.find();
    },

    casemanager: async (parent, { caseManagerId }) => {
      return CaseManager.findOne({ _id: caseManagerId });
    },
    minors: async () => {
      return Minor.find();
    },
    minor: async (parent, { minorId }) => {
      return Minor.findOne({ _id: minorId });
    },
  },

  Mutation: {
    addCaseManager: async (parent, { username, email, password }) => {
      console.log("add case manager mutation in schemas");
      const caseManager = await CaseManager.create({
        username,
        email,
        password,
      });
      console.log("MUTATION IN RESOLVERS LINE 25");
      const token = signToken(caseManager);

      return { token, caseManager };
    },

    addMinor: async (parent, { uacname, a_number, intake, gender }) => {
      console.log("add Uac mutation in schemas");
      const minor = await Minor.create({ uacname, a_number, intake, gender });
      return minor;
    },

    removeMinor: async (parent, { minorId }) => {
      return Minor.findOneAndDelete({ _id: minorId });
    },

    login: async (parent, { email, password }) => {
      const caseManager = await CaseManager.findOne({ email });

      if (!caseManager) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await CaseManager.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
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
    //   return CaseManager.findOneAndUpdate(
    //     { _id: profileId },
    //     { $pull: { skills: skill } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;
