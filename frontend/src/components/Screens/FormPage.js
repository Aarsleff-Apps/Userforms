import React, { Component } from "react";
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
const test = ["9991", "28888", "38888", "47777"];
const name = "employeeID";

const FormPage = () => {
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
        //  .then(resetForm())
        .then(setSubmitting(false));
      console.log(values);
      console.log(`submitted!!`);
    },
  });
  const classes = useStyles();

  return (
    <body>
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
                data={test}
                name={name}
                handleChange={formik.handleChange}
              />

              <div className="spacer" />

              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.field}
                label="Employee Name"
                name="employeeName"
                type="text"
                value={formik.values.employeeName}
                placeholder="2345"
                error={
                  formik.touched.employeeName &&
                  Boolean(formik.errors.employeeName)
                }
                onChange={formik.handleChange}
                helperText={
                  formik.touched.employeeName && formik.errors.employeeName
                }
              />

              <div className="spacer" />

              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.field}
                label="Job ID"
                name="jobID"
                type="text"
                value={formik.values.jobID}
                placeholder="2345"
                error={formik.touched.jobID && Boolean(formik.errors.jobID)}
                onChange={formik.handleChange}
                helperText={formik.touched.jobID && formik.errors.jobID}
              />
              <div className="spacer" />
              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.field}
                label="Job Name"
                name="job"
                type="text"
                value={formik.values.job}
                placeholder="Geo"
                error={formik.touched.job && Boolean(formik.errors.job)}
                onChange={formik.handleChange}
                helperText={formik.touched.job && formik.errors.job}
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
