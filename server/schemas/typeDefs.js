const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type CaseManager {
    _id: ID
    name: String
    email: String
    # There is now a field to store the user's password
    password: String
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    caseManager: CaseManager
  }

  type Query {
    caseManager: [CaseManager]!
    casemanager(caseManagerId: ID!): CaseManager
  }

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addCaseManager(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(caseManagerId: ID!, skill: String!): CaseManager
    removeProfile(caseManagerId: ID!): CaseManager
    removeSkill(caseManagerId: ID!, skill: String!): CaseManager
  }
`;

module.exports = typeDefs;
