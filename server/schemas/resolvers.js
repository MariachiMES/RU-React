const { AuthenticationError } = require("apollo-server-express");
const { CaseManager } = require("../models/CaseManager");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    casemanager: async () => {
      return CaseManager.find();
    },

    casemanager: async (parent, { caseManagerId }) => {
      return CaseManager.findOne({ _id: caseManagerId });
    },
  },

  Mutation: {
    addCaseManager: async (parent, { name, email, password }) => {
      const caseManager = await CaseManager.create({ name, email, password });
      const token = signToken(caseManager);

      return { token, caseManager };
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
    // removeProfile: async (parent, { profileId }) => {
    //   return CaseManager.findOneAndDelete({ _id: profileId });
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
