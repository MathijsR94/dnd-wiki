import React from 'react';
import styled from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../../apolloClient';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <ApolloProvider client={client}>
    <Router></Router>
  </ApolloProvider>
);

export default App;
