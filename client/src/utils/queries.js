import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_CENSUS = gql`
  query minors {
    minors {
      _id
      uacname
      a_number
      submitted
      approved
      remanded
      discharged
    }
  }
`;

export const QUERY_MINOR = gql`
  query minor($_id: ID) {
    minor {
      uacname
    }
  }
`;
