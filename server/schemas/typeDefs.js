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
  complete: Boolean
}
input TaskInput {
  taskText: String
  taskValue: Int
  complete: Boolean
}

 type User {
  _id: ID
  firstName: String
  lastName: String
  password: String
  email: String
  tasks: [Task]
}

type Auth {
  token: ID
  user: User
}

type Query {
  tasks: [Task]
  task(_id: ID!): Task
  users: [User]
}

type Mutation{
  login(email: String!, password: String!): Auth
  addUser(
      firstName: String!,
      lastName: String!,
      email: String!,
      password: String!
      
   ): Auth
   addTask(userId: ID!, task: TaskInput): User
  updateTask(taskId: ID!, userId: ID!, complete: Boolean!): User
  removeTask(taskId: ID!, userID: ID!): User
} 
`;

module.exports = typeDefs;
 //   firstName: String!
 //   lastName: String!
 //   username: String!
 //   email: String!
 //   password: String!
 // ): Auth
 // updateTask(_id: ID!, userId: ID!, complete: Boolean!): User
 // removeTask(taskId: ID!, userId: ID!): User
//} 
//`;

    // type History {
    //   _id: ID
    //   date: Date
    //   tasks: [Task]
    // }
  
    // type Goal {
    //   _id: ID
    //   goalText: String
    //   goalValue: Int
    // }
  
    // type Query {
    //   categories: [Category]
    //   history(): History takes in tasks marked complete per user
    //   goal(_id: ID!): Goal
    // }
  
    // type Mutation {
    //   addTaskToHistory(taskId: ID!): History
    //   addGoal(userId: ID!): Goal
    //   removeGoal(userId: ID!): Goal
    // }
