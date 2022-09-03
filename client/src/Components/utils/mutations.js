import { gql } from '@apollo/client';

export const ADD_TASK = gql`
mutation addTask(
    $taskText: String!
    $taskValue: Number
  ) {
    addTask(
      taskText: $taskText
      taskValue: $taskValue
    )
    }
`;

export const ADD_GOAL = gql`
 mutation addGoal(
    $goalText: String!
    $goalValue: Number!
 ) {
    addGoal(
        goalText: $goalText
        goalValue: $goalValue
    )
 }
`;

// check if this. is right at all or if we need this in mutations (and not just reducer)
export const UPDATE_TASK = gql`
 mutation updateTask($tasks: [ID]!) {
    updateTask(tasks: $tasks) {
        complete
    }
 }
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
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
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

// are our removes in mutations? or in reducers?
export const REMOVE_TASK = gql`
`;

export const REMOVE_GOAL = gql`
`;
