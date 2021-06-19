import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TimePage from "./Screens/TimePage";
import Homescreen from "./Screens/HomeScreen";
import SalaryPage from "./Screens/SalaryPage";
import { AddUser } from "./TestComponents/CRUD/AddUser";
import { EditUser } from "./TestComponents/CRUD/EditUser";
import { EmployeeAddUser } from "./Screens/CRUD/Employee/AddUser";
import { EmployeeEditUser } from "./Screens/CRUD/Employee/EditUser";
import { GlobalProvider } from "./context/GlobalState";
import EmployeeManagement from "./Screens/CRUD/Employee/EmployeeManagement";
import JobManagement from "./Screens/CRUD/Jobs/JobManagement";
import { AddJob } from "./Screens/CRUD/Jobs/AddJob";
import { EditJob } from "./Screens/CRUD/Jobs/EditJob";
import Export from "./Screens/Export";

export default class PageRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="grid-container">
        <header class="header">
          <a href="/">
            <img
              class="logo"
              src="https://forms.aarsleff.co.uk/images/Logo.png?v=gNMJrA7Q8A"
              width="92px"
              height="51px"
            />
          </a>
        </header>

        <main class="main">
          <GlobalProvider>
            <Router>
              <Route exact path="/form" component={TimePage} />
              <Route exact path="/salary" component={SalaryPage} />
              <Route exact path="/employee" component={EmployeeManagement} />
              <Route exact path="/employee/add" component={EmployeeAddUser} />
              <Route
                exact
                path="/employee/edit/:id"
                component={EmployeeEditUser}
              />
              <Route exact path="/job" component={JobManagement} />
              <Route exact path="/job/add" component={AddJob} />
              <Route exact path="/job/edit/:id" component={EditJob} />
              <Route exact path="/export" component={Export} />
              <Route exact path="/crud/add" component={AddUser} />
              <Route exact path="/crud/edit/:id" component={EditUser} />
              <Route exact path="/" component={Homescreen} />
            </Router>
          </GlobalProvider>
        </main>
        <footer class="footer">All right reserved.</footer>
      </div>
    );
  }
}
