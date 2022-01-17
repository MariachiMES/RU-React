import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      User {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      User {
        _id
        username
      }
    }
  }
`;

export const ADD_MINOR = gql`
  mutation addMinor(
    $uacname: String!
    $a_number: Int!
    $intake: String!
    $gender: String!
  ) {
    addMinor(
      uacname: $uacname
      a_number: $a_number
      intake: $intake
      gender: $gender
    ) {
      uacname
      a_number
      intake
    }
  }
`;
