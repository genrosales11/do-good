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
 
  tasks(category: ID, taskText: String): [Task]

 
}
type Mutation{
  login(email: String!, password: String!): Auth
  addUser(
      firstName: String!
     lastName: String!
       username: String!
       email: String!
       password: String!
      ): Auth
}
  
`;

module.exports = typeDefs;
// need to add how it gets an id and value (how are these different?) was on64
    // needs to be only for user, not globally updated was on 67

   
  
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
  

  
    // 
  
    // type Query {
    //   categories: [Category]
    //   tasks(category: ID, taskText: String): [Task]
    //   history(): History
    //   tasks(taskText: String): [Task]
    //   task(_id: ID!): Task
    //   user: User
    //   goal(_id: ID!): Goal
    // }
  
    // type Mutation {
    //  
    //   addTaskToHistory(tasks: [ID]!): History
    //   addGoal(
    //     goalText: String!
          
    //   ): Goal
    //   updateTask(_id: ID!, complete: true): Task
  
    //   
    // }