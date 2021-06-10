import React, { Component } from "react";
import { render } from "react-dom";
import FormPage from "./FormPage";
import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomePage />
        <FormPage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);