import { gql } from '@apollo/client';

// Do we need to query all of them or by group somehow

export const QUERY_TASK = gql`
{
    tasks {
      _id
      taskText
    }
}
`;

export const QUERY_USER = gql`
{
    user {
      username
      tasks {
        _id
        taskText
      }
    }
  }
`;

export const QUERY_HISTORY = gql`
`;

export const QUERY_GOAL = gql`
`;