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
 
  tasks: [Task]
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

  removeTask(taskId: ID!, userID: ID!): User
}
  
`;

module.exports = typeDefs;
