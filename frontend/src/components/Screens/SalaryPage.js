import React, { Component, useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { salaryValidationSchema } from "../Validation/ValidationSchema";
import DropDown from "../FormComponents/DropDown";
import { useStyles } from "./styling";

const SalaryPage = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/employee/list")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPeople(data);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      employeeID: "",
      employeeName: "",
      salaryWeekly: "",
      carAllowance: "",
      pension: "",
      nationalInsurance: "",
      joiningDate: "",
      leavingDate: "",
    },
    validationSchema: salaryValidationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employee_id: values.employeeID, //the object names should match the views.py
          employee: values.employeeName,
          salary_weekly: values.salaryWeekly,
          leaving_date: values.leavingDate,
          joining_date: values.joiningDate,
          car_allowance: values.carAllowance,
          national_insurance: values.nationalInsurance,
          pension: values.pension,
        }),
      };
      fetch("api/salary/", requestOptions)
        .then((response) => response.json())
        .then(resetForm())
        .then(setSubmitting(false));
      console.log(`submitted!!`);
    },
  });

  const classes = useStyles();

  return (
    <div>
      <h1 class="title">Employee Timesheets</h1>

      <form className="centralContainer" onSubmit={formik.handleSubmit}>
        <div class={classes.fieldContainer}>
          {people && (
            <DropDown
              data={people.map(({ employee_id }) => employee_id)}
              name="employeeID"
              handleChange={formik.handleChange}
            />
          )}

          <div className="spacer" />

          {people && (
            <DropDown
              data={people.map(({ employee }) => employee)}
              name="employeeName"
              handleChange={formik.handleChange}
            />
          )}
          <TextField
            id="outlined-basic"
            variant="outlined"
            className={classes.field}
            label="Weekly Salary"
            name="salaryWeekly"
            type="text"
            value={formik.values.salaryWeekly}
            placeholder="2345"
            error={
              formik.touched.salaryWeekly && Boolean(formik.errors.salaryWeekly)
            }
            onChange={formik.handleChange}
            helperText={
              formik.touched.salaryWeekly && formik.errors.salaryWeekly
            }
          />

          <div className="dateStyle">
            <TextField
              id="outlined-basic"
              variant="outlined"
              className={classes.field}
              name="joiningDate"
              type="date"
              value={formik.values.joiningDate}
              error={
                formik.touched.joiningDate && Boolean(formik.errors.joiningDate)
              }
              onChange={formik.handleChange}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              className={classes.field}
              name="leavingDate"
              type="date"
              value={formik.values.leavingDate}
              error={
                formik.touched.leavingDate && Boolean(formik.errors.leavingDate)
              }
              onChange={formik.handleChange}
            />
          </div>

          <TextField
            id="outlined-basic"
            variant="outlined"
            className={classes.field}
            label="Car Allowance"
            name="carAllowance"
            type="text"
            value={formik.values.carAllowance}
            placeholder="2345"
            error={
              formik.touched.carAllowance && Boolean(formik.errors.carAllowance)
            }
            onChange={formik.handleChange}
            helperText={
              formik.touched.carAllowance && formik.errors.carAllowance
            }
          />

          <TextField
            id="outlined-basic"
            variant="outlined"
            className={classes.field}
            label="National Insurance"
            name="nationalInsurance"
            type="text"
            value={formik.values.nationalInsurance}
            placeholder="2345"
            error={
              formik.touched.nationalInsurance &&
              Boolean(formik.errors.nationalInsurance)
            }
            onChange={formik.handleChange}
            helperText={
              formik.touched.nationalInsurance &&
              formik.errors.nationalInsurance
            }
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className={classes.field}
            label="Pension"
            name="pension"
            type="text"
            value={formik.values.pension}
            placeholder="2345"
            error={formik.touched.pension && Boolean(formik.errors.pension)}
            onChange={formik.handleChange}
            helperText={formik.touched.pension && formik.errors.pension}
          />
        </div>
        <Button type="submit" color="primary" className={classes.btn}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SalaryPage;
