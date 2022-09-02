import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
        } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import Header from './Components/Header/Header'
import Home from './Components/pages/Home'
import Category from './Components/pages/Category'
import About  from './Components/pages/About'
import DataHistory from './Components/pages/DataHistory'
import Transportation from './Components/pages/Transportation'
import Signup from './Components/pages/Signup'
import Login from './Components/pages/Login'
import Logout from './Components/pages/Logout'
import Recycle from './Components/pages/Recycle'
import Trash from './Components/pages/Trash'
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




function App() {
  
  return (
  <ApolloProvider client={client}>
    <div className="App">
    <Router>
        <Header />
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/category" element={<Category />}>
      </Route>
      <Route path="/history" element={<DataHistory />}>
      </Route>
      <Route path="/about" element={<About/>}>
      </Route>
      <Route path="/transportation" element={<Transportation />}>
      </Route>
      <Route path="/trash" element={<Trash />}>
      </Route>
      <Route path="/recycle" element={<Recycle/>}>
      </Route>
      <Route path="/signup" element={<Signup />}>
      </Route>
      <Route path="/login" element={<Login />}>
      </Route>
      <Route path="/logout" element={<Logout />}>
      </Route>
    </Routes>
        {/* {component} */}
        </Router>
    </div>
    </ApolloProvider>
  );
}

export default App;