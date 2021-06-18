import React, { Component, useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { employeeValidationSchema } from "../Validation/ValidationSchema";
import DropDown from "../FormComponents/DropDown";

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

const validationSchema = employeeValidationSchema;
const userId = "employeeID";
const userName = "employeeName";
const jobId = "jobID";
const jobName = "job";

const FormPage = () => {
  const [users, setUsers] = useState({});
  const userIDs = [];
  const userNames = [];

  const [jobs, setjobs] = useState({});
  const jobIDs = [];
  const jobNames = [];

  const jobIdMap = () => {
    jobs.length > 0
      ? jobs.map((user) => jobIDs.push(user.job_id))
      : console.log("Not loaded yet");
  };

  const jobNameMap = () => {
    jobs.length > 0
      ? jobs.map((user) => jobNames.push(user.job))
      : console.log("Not loaded yet");
  };

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

  useEffect(() => {
    let loadCounter = 0;
    if (loadCounter === 0) {
      fetch("http://127.0.0.1:8000/api/job/list")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setjobs(data);
          console.log("egg");
        });
    }
    loadCounter += 1;
    console.log(loadCounter);
  }, []);

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

  console.log(userIDs);
  console.log(userNames);

  const formik = useFormik({
    initialValues: {
      employeeID: "",
      employeeName: "",
      jobID: "",
      job: "",
      hours: "",
      date: "",
      specialPower: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employee_id: values.employeeID, //the object names should match the views.py
          employee: values.employeeName,
          job_id: values.jobID,
          job: values.job,
          hours: values.hours,
          created_at: values.date,
        }),
      };

      fetch("api/create/", requestOptions)
        .then((response) => response.json())
        .then(resetForm())
        .then(setSubmitting(false));
      console.log(values);
      console.log(`submitted!!`);
    },
  });
  const classes = useStyles();

  const userArray = () => {
    console.log(users);
  };

  return (
    <body>
      {userIdMap()}
      {userNameMap()}
      {jobIdMap()}
      {jobNameMap()}
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
          <h1 class="title">Employee Timesheets</h1>

          <form className="centralContainer" onSubmit={formik.handleSubmit}>
            <div class={classes.fieldContainer}>
              <div className="spacer" />

              <DropDown
                data={userIDs}
                name={userId}
                handleChange={formik.handleChange}
              />

              <div className="spacer" />

              <DropDown
                data={userNames}
                name={userName}
                handleChange={formik.handleChange}
              />

              <div className="dateStyle">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.field}
                  name="date"
                  type="date"
                  value={formik.values.date}
                  error={formik.touched.date && Boolean(formik.errors.date)}
                  onChange={formik.handleChange}
                />
              </div>

              <DropDown
                data={jobIDs}
                name={jobId}
                handleChange={formik.handleChange}
              />

              <DropDown
                data={jobNames}
                name={jobName}
                handleChange={formik.handleChange}
              />

              <div className="spacer" />
              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.field}
                label="Hours"
                name="hours"
                type="text"
                value={formik.values.hours}
                placeholder="8"
                error={formik.touched.hours && Boolean(formik.errors.hours)}
                onChange={formik.handleChange}
                helperText={formik.touched.hours && formik.errors.hours}
              />
              <div className="spacer" />
            </div>
            <Button type="submit" color="primary" className={classes.btn}>
              Submit
            </Button>
          </form>
        </main>
        <footer class="footer">All right reserved.</footer>
      </div>
    </body>
  );
};

export default FormPage;
