import React, { Component } from "react";
import { render } from "react-dom";
import PageRouter from "./PageRouter";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageRouter />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
