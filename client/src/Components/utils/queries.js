import { gql } from '@apollo/client';

// Do we need to query all of them or by group somehow

export const QUERY_TASK = gql`
{
    tasks {
      _id
      taskText
      taskValue
      complete
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
        taskValue
        complete
      }
      goals {
        _id
        goalText
        goalValue
      }
    }
  }
`;

// does it need to be per user? are we taking tasks a fancy way?
export const QUERY_HISTORY = gql`
{

}
`;

export const QUERY_GOAL = gql`
{
    goal {
        _id
        goalText
        goalValue
    }
}
`;