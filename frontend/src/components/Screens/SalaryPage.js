import React, { Component } from "react";
import { Formik, useFormik } from "formik";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { salaryValidationSchema } from "../Validation/ValidationSchema";

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

const validationSchema = salaryValidationSchema;

const SalaryPage = () => {
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
    validationSchema: validationSchema,
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
          pension: values.pension
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

          <form className = "centralContainer" onSubmit={formik.handleSubmit}>
            <div class={classes.fieldContainer}>

              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.field}
                label="Employee ID"
                name="employeeID"
                type="text"
                value={formik.values.employeeID}
                placeholder="2345"
                error={
                  formik.touched.employeeID && Boolean(formik.errors.employeeID)
                }
                onChange={formik.handleChange}
                helperText={
                  formik.touched.employeeID && formik.errors.employeeID
                }
              />


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
                  formik.touched.salaryWeekly &&
                  Boolean(formik.errors.salaryWeekly)
                }
                onChange={formik.handleChange}
                helperText={
                  formik.touched.salaryWeekly && formik.errors.salaryWeekly
                }
              />

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
                  formik.touched.carAllowance &&
                  Boolean(formik.errors.carAllowance)
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
                  formik.touched.nationalInsurance && formik.errors.nationalInsurance
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
                error={
                  formik.touched.pension &&
                  Boolean(formik.errors.pension)
                }
                onChange={formik.handleChange}
                helperText={
                  formik.touched.pension && formik.errors.pension
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
                  error={formik.touched.joiningDate && Boolean(formik.errors.joiningDate)}
                  onChange={formik.handleChange}
                />
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.field}
                  name="leavingDate"
                  type="date"
                  value={formik.values.leavingDate}
                  error={formik.touched.leavingDate && Boolean(formik.errors.leavingDate)}
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

export default SalaryPage;
