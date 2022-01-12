import { gql } from "@apollo/client";

export const LOGIN_CASE_MANAGER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CASE_MANAGER = gql`
  mutation addCaseManager(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addCaseManager(username: $username, email: $email, password: $password) {
      token
      caseManager {
        _id
        username
      }
    }
  }
`;
