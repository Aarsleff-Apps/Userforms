import React, { Component } from "react";
import { render } from "react-dom";
import FormPage from "./FormPage";
import HomePage from "./HomePage";
import SalaryPage from "./SalaryPage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomePage />
        <FormPage />
        <SalaryPage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);