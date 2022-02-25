import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";

export const client = new ApolloClient({
  uri: `https://graphql-weather-api.herokuapp.com/`, //THIS IS THE URL OF THR GRAPHQL WE WANTO TO QUERY
  fetch
});