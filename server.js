// import axios from 'axios';

// const weather = { weather: async (query) =>
//  axios.get(``) }

// Import express and Apollo Server to create our server
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
//   change this if named smth else
  context: authMiddleware
});

const app = express();


