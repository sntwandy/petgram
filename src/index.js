import React from "react";
import ReactDOM from "react-dom";

// Components
import { App } from "./App";

// Global Styles
import { GlobalStyles } from "./GlobalStyles";
GlobalStyles();

ReactDOM.render(<App />, document.querySelector("#App"));
