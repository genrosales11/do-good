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
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_TASK = gql`
mutation addTask(
    $taskText: String!
    $taskValue: Number
  ) {
    addTask(
      taskText: $taskText
      taskValue: $taskValue
    )
`;

export const ADD_GOAL = gql`
`;

export const UPDATE_TASK = gql`
`;

export const ADD_TASK_TO_HISTORY = gql`
  mutation addTaskToHistory($tasks: [ID]!) {
    addTaskToHistory(tasks: $tasks) {
      tasks {
        _id
        taskText
        taskValue
        complete
      }
    }
  }
`;

export const REMOVE_TASK = gql`
`;

export const REMOVE_GOAL = gql`
`;