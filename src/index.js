import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Components
import { App } from "./App";

// Context
import Contex from "./Context";

// Initializing our client
const client = new ApolloClient({
  uri: "https://petgram-backend-one.now.sh/graphql",
});

ReactDOM.render(
  <Contex.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Contex.Provider>,
  document.querySelector("#App")
);
