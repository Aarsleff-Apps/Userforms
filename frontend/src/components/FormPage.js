import * as Yup from "yup";
import React, { Component } from 'react'
import { Formik, useFormik } from "formik";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({

  btn: {
    background: '#1F85DE',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    margin: '5%',
    padding: '0 25%',
  },
  field: {
    // border: 0,
    // textAlign: 'center',
    // color: 'white',
    // height: 1,
     width: '100%',
    // margin: 7,
    // padding: '1.55rem'
  },
  fieldContainer: {
    display: 'flexbox',
    justifyContent: 'center',
    padding: '2rem'
  },
  dateStyle: {
    width: '180px',

  }

});


const validationSchema = Yup.object({
  employeeID: Yup.number().required("Required"),
  employeeName: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(15, "Must be 15 char or less")
    .required("Required"),
  jobID: Yup.number().required("Required"),
  job: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(15, "Must be 15 char or less")
    .required("Required"),
  hours: Yup.number().required("Required")
        .min(8, "Please enter a minimum of 8 hours")
        .max(12, "Hours must not exceed 12"),
      
  date: Yup.date().required("Required"),
  specialPower: Yup.string().oneOf(
    ["flight", "invisibility", "wealthy bat guy", "other"],
    "Invalid special power"
  ),
});

const FormPage = () => {
  const formik = useFormik({
    initialValues: {
      employeeID: "",
      employeeName: "",
      jobID: "",
      job: "",
      hours: "",
      date: '',
      specialPower: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm })=> {
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            employee_id: values.employeeID,   //the object names should match the views.py
            employee: values.employeeName,
            job_id: values.jobID,
            job: values.job,
            hours: values.hours,
            created_at: values.date
            
        })
      };
       fetch('api/create/', requestOptions)
             .then((response) => response.json())
            //  .then(resetForm())
             .then(setSubmitting(false));
             console.log(`submitted!!`);
    },
  });

  const classes = useStyles();

  return (
    <div>
    <body class="main">
      <header class="navbar">
        <a href="https://www.aarsleff.co.uk/">
          <img class ="logo" src="https://forms.aarsleff.co.uk/images/Logo.png?v=gNMJrA7Q8A" width='92px' height='51px' />
        </a>
      </header>
    <div class="container">
      <h1 class="title">Employee Timesheets</h1>
    <div class="d1">
      
    <form onSubmit={formik.handleSubmit} >
      <div class={classes.fieldContainer} >
        <TextField
          className = {classes.field}
          label="Employee ID"
          name="employeeID"
          type="text"
          value={formik.values.employeeID}
          placeholder="1234"
          onChange={formik.handleChange}
          error={formik.touched.employeeID && Boolean(formik.errors.employeeID)}
          helperText={formik.touched.employeeID && formik.errors.employeeID}
        />
        <div className="spacer" />

        <TextField
          className = {classes.field}
          label="Employee Name"
          name="employeeName"
          type="text"
          value={formik.values.employeeName}
          placeholder="frank"
          error={
            formik.touched.employeeName && Boolean(formik.errors.employeeName)
          }
          onChange={formik.handleChange}
          helperText={formik.touched.employeeName && formik.errors.employeeName}
        />
        <div className="spacer" />
        <TextField
          className = {classes.field}
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
          className = {classes.field}
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
          className = {classes.field}
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
          className = {classes.field}
          // label="date"
          name="date"
          type="date"
          value={formik.values.date}
          error={formik.touched.date && Boolean(formik.errors.date)}
          onChange={formik.handleChange}
          // helperText={formik.touched.date && formik.errors.date}
        />
        </div>
      </div>
      <Button type="submit" color="primary" className = {classes.btn}>Submit</Button>
    </form>
    </div>
    </div>
    </body>
    <footer class="foot" />
    </div>

  );
};

export default FormPage;