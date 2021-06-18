import React, { Component, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Customers } from "../ExcelComponents/Table";
import { ExportReactCSV } from "../ExcelComponents/ExportReactCSV";
import { ExportCSV } from "../ExcelComponents/ExportCSV";
import { CSVLink } from "react-csv";

const useStyles = makeStyles({
  btn: {
    background: "#1F85DE",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 120,
    width: "100%",
    marginTop: "5%",
    padding: "0 25%",
    fontSize: "4rem",
  },
  field: {
    width: "100%",
    height: "25%",
    fontSize: "4rem",
    paddingBottom: 10,
  },
});

const userId = "employeeID";
const userName = "employeeName";

const Export = () => {


  const data = [
    {
      firstName: "Warren",
      lastName: "Morrow",
      email: "sokyt@mailinator.com",
      age: "36",
    },
    {
      firstName: "Gwendolyn",
      lastName: "Galloway",
      email: "weciz@mailinator.com",
      age: "76",
    },
    {
      firstName: "Astra",
      lastName: "Wyatt",
      email: "quvyn@mailinator.com",
      age: "57",
    },
    {
      firstName: "Jasmine",
      lastName: "Wong",
      email: "toxazoc@mailinator.com",
      age: "42",
    },
    {
      firstName: "Brooke",
      lastName: "Mcconnell",
      email: "vyry@mailinator.com",
      age: "56",
    },
    {
      firstName: "Christen",
      lastName: "Haney",
      email: "pagevolal@mailinator.com",
      age: "23",
    },
    {
      firstName: "Tate",
      lastName: "Vega",
      email: "dycubo@mailinator.com",
      age: "87",
    },
    {
      firstName: "Amber",
      lastName: "Brady",
      email: "vyconixy@mailinator.com",
      age: "78",
    },
    {
      firstName: "Philip",
      lastName: "Whitfield",
      email: "velyfi@mailinator.com",
      age: "22",
    },
    {
      firstName: "Kitra",
      lastName: "Hammond",
      email: "fiwiloqu@mailinator.com",
      age: "35",
    },
    {
      firstName: "Charity",
      lastName: "Mathews",
      email: "fubigonero@mailinator.com",
      age: "63",
    },
  ];


  const [exportData,setExportData] = useState({})
  const [users, setUsers] = useState({});
  const userIDs = [];
  const userNames = [];
  const userDepts = [];

  const userIdMap = () => {
    users.length > 0
      ? users.map((user) => userIDs.push(user.employee_id))
      : console.log("Not loaded yet");
  };

  const userNameMap = () => {
    users.length > 0
      ? users.map((user) => userNames.push(user.employee))
      : console.log("Not loaded yet");
  };

  const userDeptMap = () => {
    users.length > 0
      ? users.map((user) => userDepts.push(user.department))
      : console.log("Not loaded yet");
  };

  useEffect(() => {
    let loadCounter = 0;
    if (loadCounter === 0) {
      fetch("http://127.0.0.1:8000/api/employee/list")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setUsers(data);
          console.log(data);
        });
    }
    loadCounter += 1;
  }, []);

  const classes = useStyles();

  const userArray = () => {
    console.log(users);
  };

  console.log(userNames);
  console.log(userIDs);
  console.log(userDepts);


  const customers = () => {
    let custs = [];
    for (let i = 0; i <= 25; i++) {
      custs.push({
        employeeID: `ID${i}`,
        employee: `NAME${i}`,
        department: `DEPT${i}`,
      });
    }
    console.log();
    return custs
  };

  const headers = [
    { label: "First Name", key: "id" },
    { label: "Last Name", key: "employee_id" },
    { label: "Email", key: "employee" },
    { label: "Age", key: "department" },
  ];
  const csvReport = {
    data: JSON.stringify(users),
    filename: "TestExport.csv",
  };

  console.log(data)
  console.log(users)
  return (
    <body>
      {userIdMap()}
      {userNameMap()}
      {userDeptMap()}
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
          <h1 class="title">Data Export</h1>

          <div className="App">
            <div className="row">
              <div className="col-md-8">
                <h2>Customers</h2>
              </div>
              <div className="col-md-4 center">
                <div classname="App">
                  <CSVLink {...csvReport}>Export to CSV</CSVLink>
                </div>
              </div>
            </div>
            <Customers customers={customers()} />
          </div>
        </main>
        <footer class="footer">All right reserved.</footer>
      </div>
    </body>
  );
};

export default Export;
