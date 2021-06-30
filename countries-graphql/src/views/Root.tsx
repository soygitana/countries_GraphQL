import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});


const Root = () => {
  return (
    <ApolloProvider client={client}>

      EXPLORE CONTINENTS

    </ApolloProvider>
  );
}

export default Root;
