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


  }
`;

module.exports = typeDefs;
