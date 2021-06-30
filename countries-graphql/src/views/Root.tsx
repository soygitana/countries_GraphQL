import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import GetContinents from './ContinentsList';

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/continents" component={GetContinents} />
              {/* <Route exact path="/continents/:code" component={GetCountries} /> */}
            </Switch>
          </Wrapper>
        </ThemeProvider >
      </Router>
    </ApolloProvider>
  );
}

export default Root;
