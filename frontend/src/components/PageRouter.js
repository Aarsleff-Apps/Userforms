import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import CRUDtest from "./Screens/CRUDtest";
import FormPage from "./Screens/FormPage";
import Homescreen from "./Screens/HomeScreen";
import SalaryPage from "./Screens/SalaryPage";
import { AddUser } from "./TestComponents/CRUD/AddUser";
import { EditUser } from "./TestComponents/CRUD/EditUser";
import { GlobalProvider } from "./context/GlobalState";

export default class PageRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GlobalProvider>
      <Router>
      <Route exact path="/form" component={FormPage} />
      <Route exact path="/salary" component={SalaryPage} />
      <Route exact path="/crud" component={CRUDtest} />
      <Route exact path="/crud/add" component={AddUser} />
      <Route exact path="/crud/edit/:id" component={EditUser} />
      <Route exact path="/" component={Homescreen} />
    </Router>
      </GlobalProvider>

    );
  }
}
