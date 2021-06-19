import React, { Component, useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { employeeValidationSchema } from "../Validation/ValidationSchema";
import DropDown from "../FormComponents/DropDown";
import { useStyles } from "./styling";

const FormPage = () => {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/job/list")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setJobs(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/employee/list")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setUsers(data);
      });
  }, []);

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
    validationSchema: employeeValidationSchema,
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
    },
  });
  const classes = useStyles();

  return (
    <main class="main">
      <h1 class="title">Employee Timesheets</h1>

      <form className="centralContainer" onSubmit={formik.handleSubmit}>
        <div class={classes.fieldContainer}>
          <div className="spacer" />

          {users && (
            <DropDown
              data={users.map(({ employee_id }) => employee_id)}
              name="employeeID"
              handleChange={formik.handleChange}
            />
          )}

          <div className="spacer" />

          {users && (
            <DropDown
              data={users.map(({ employee }) => employee)}
              name="employeeName"
              handleChange={formik.handleChange}
            />
          )}

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

          {jobs && (
            <DropDown
              data={jobs.map(({ job_id }) => job_id)}
              name="jobID"
              handleChange={formik.handleChange}
            />
          )}

          {jobs && (
            <DropDown
              data={jobs.map(({ job }) => job)}
              name="job"
              handleChange={formik.handleChange}
            />
          )}

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
  );
};

export default FormPage;
