import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Components
import { App } from "./App";

// Initializing our client
const client = new ApolloClient({
  uri: "https://petgram-backend-one.now.sh/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector("#App")
);
