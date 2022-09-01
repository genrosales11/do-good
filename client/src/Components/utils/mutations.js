import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`

`;

export const ADD_TASK = gql`
`;

export const ADD_GOAL = gql`
`;

export const UPDATE_TASK = gql`
`;

export const REMOVE_TASK = gql`
`;

export const REMOVE_GOAL = gql`
`;