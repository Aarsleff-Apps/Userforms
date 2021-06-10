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
    margin: '-50%',
    padding: '0 30px',
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
  salaryWeekly: Yup.number().required("Required"),

});

const SalaryPage = () => {
  const formik = useFormik({
    initialValues: {
      employeeID: "",
      employeeName: "",
      salaryWeekly: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm })=> {
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            employee_id: values.employeeID,   //the object names should match the views.py
            employee: values.employeeName,
            salary_weekly: values.salaryWeekly,
            
        })
      };
       fetch('api/salary/', requestOptions)
             .then((response) => response.json())
             .then(resetForm())
             .then(setSubmitting(false));
             console.log(`submitted!!`);
    },
  });

  const classes = useStyles();

  return (
    <div class="d1">
      <h1>Employee Salary Details</h1>
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
          label="Weekly Salary"
          name="salaryWeekly"
          type="salaryWeekly"
          value={formik.values.job}
          placeholder="400"
          error={formik.touched.salaryWeekly && Boolean(formik.errors.salaryWeekly)}
          onChange={formik.handleChange}
          helperText={formik.touched.salaryWeekly && formik.errors.salaryWeekly}
        />
      </div>
      <Button type="submit" color="primary" className = {classes.btn}>Submit</Button>
    </form>
    </div>
  );
};

export default SalaryPage;