const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    is_teamLead: Boolean
    caseload: [Minor]
  }

  type Minor {
    _id: ID
    uacname: String
    a_number: Int
    dob: String
    uac_age: Int
    coo: String
    intake: String
    gender: String
    category: String
    submitted: String
    approved: String
    remanded: String
    discharged: String
    exception: String
    sponsor_assessment: String
    frp: String
    ari: String
    por: String
    poa: String
    lod: String
    lopc: String
    sponsor_bgc: String
    sponsor_id: String
    sponsor_fp: String
    hhm_id: String
    hhm_checks: String
    sex_offender_check: String
    caregiver_date: String
    prior_sponsorship_date: String
    previous_address_date: String
    criminal_history_date: String
    can_check_requested: String
    relationsip_narrative: String
    release_type: String
    sir: Int
    sir_narrative: String
    list_of_bcs: String
    coo_narrative: String
    self_disclosure: String
    criminal_history: String
    sponsor_id_type: String
    hhm_id_list: String
    fp_required: String
    fp_results: String
    can_check_required: String
    can_check_received: String
    can_check_results: String
    coo_caregiver: String
    prior_sponsorship: String
    previous_address: String
    release_reccomendation: String
    home_study_prs: String
    address_document: String
    sponsor_name: String
    sponsor_age: Int
    sponsor_gender: String
    sponsor_address: String
    sponsor_city: String
    sponsor_state: String
    sponsor_zip: String
    sponsor_relationship: String
  }
  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    User: User
  }

  type Query {
    users: [User]!
    user(UserId: ID!): User
    minors: [Minor]!
    minor(minorId: ID!): Minor
  }

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type

    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeUser(UserId: ID!): User

    removeMinor(_id: ID!): Minor

    addMinor(
      uacname: String!
      a_number: Int!
      intake: String!
      gender: String!
    ): Minor

    updateSponsor(
      sponsor_name: String
      sponsor_age: Int
      sponsor_gender: String
      sponsor_address: String
      sponsor_city: String
      sponsor_state: String
      sponsor_zip: String
      sponsor_relationship: String
    ): Minor

    updateTasks(
      sponsor_assessment: String
      frp: String
      ari: String
      por: String
      poa: String
      lod: String
      lopc: String
      sponsor_bgc: String
      sponsor_id: String
      sponsor_fp: String
      hhm_id: String
      hhm_checks: String
      sex_offender_check: String
      caregiver_date: String
      prior_sponsorship_date: String
      previous_address_date: String
      criminal_history_date: String
      can_check_requested: String
    ): Minor

    updateStatus(
      submitted: String
      approved: String
      remanded: String
      discharged: String
    ): Minor

    updateReleaseRequest(
      relationsip_narrative: String
      release_type: String
      sir: Int
      sir_narrative: String
      list_of_bcs: String
      coo_narrative: String
      self_disclosure: String
      criminal_history: String
      sponsor_id_type: String
      hhm_id_list: String
      fp_required: String
      fp_results: String
      can_check_required: String
      can_check_received: String
      can_check_results: String
      coo_caregiver: String
      prior_sponsorship: String
      previous_address: String
      release_reccomendation: String
      home_study_prs: String
      address_document: String
    ): Minor
  }
`;

module.exports = typeDefs;
