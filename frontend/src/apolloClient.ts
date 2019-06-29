import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000",
  credentials: "include"
});
