const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Task {
    _id: ID
    taskText: String
    taskValue: Int
    category: Category
    complete: Boolean
  }

  type History {
    _id: ID
    date: Date
    tasks: [Task]
  }

  type Goal {
    _id: ID
    goalText: String
    goalValue: Int
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    tasks(category: ID, taskText: String): [Task]
    history(): History
    tasks(taskText: String): [Task]
    task(_id: ID!): Task
    user: User
    goal(_id: ID!): Goal
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      username: String!
      email: String!
      password: String!
    ): Auth
    addTaskToHistory(tasks: [ID]!): History
    addGoal(
      goalText: String!
        // need to add how it gets an id and value (how are these different?)
    ): Goal
    updateTask(_id: ID!, complete: true): Task
    // needs to be only for user, not globally updated
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
