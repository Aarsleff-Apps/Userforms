import * as Yup from "yup";
import React, { Component } from 'react'
import { Formik, useFormik } from "formik";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  field: {
    maxWidth: 350,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
    
  },
  btn: {
    height: 100,
    width: 350,
  },
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
  hours: Yup.string().required("Required"),
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
            
        })
      };
       fetch('api/create/', requestOptions)
             .then((response) => response.json())
             .then(resetForm())
             .then(setSubmitting(false));
             console.log(`submitted!!`);
    },
  });

  const classes = useStyles();

  return (
    <div class="d1">
      <h1>Employee Timesheets</h1>
    <form onSubmit={formik.handleSubmit} >
      <div>
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
      </div>
      <Button type="submit" color="secondary" className = {classes.btn}>Submit</Button>
    </form>
    </div>
  );
};

export default FormPage;