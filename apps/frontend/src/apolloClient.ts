import ApolloClient, { InMemoryCache } from 'apollo-boost';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000',
  credentials: 'same-origin'
});
