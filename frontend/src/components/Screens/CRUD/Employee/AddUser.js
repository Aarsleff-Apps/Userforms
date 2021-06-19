import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FormGroup } from "reactstrap";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { employeeListValidationSchema } from "../../../Validation/ValidationSchema";
import { useFormik } from "formik";
import { useStyles } from "../../styling";

export const EmployeeAddUser = () => {
  const classes = useStyles();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      employeeId: "",
      employee: "",
      department: "",
    },
    validationSchema: employeeListValidationSchema,
    onSubmit: (values) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employee_id: values.employeeId,
          employee: values.employee,
          department: values.department,
        }),
      };

      fetch("http://127.0.0.1:8000/api/employee/add", requestOptions)
        .then((response) => response.json())
        .then(history.push("/employee"));
    },
  });

  const returnClick = () => {
    history.push("/employee");
  };

  return (
    <main class="main">
      <h1 class="title">Employee Timesheets</h1>
      <div className="addContainer">
        <form className="centralContainer" onSubmit={formik.handleSubmit}>
          <FormGroup>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className={classes.field}
              type="text"
              value={formik.values.employeeId}
              onChange={formik.handleChange}
              error={
                formik.touched.employeeId && Boolean(formik.errors.employeeId)
              }
              name="employeeId"
              placeholder="Enter Employee ID"
              helperText={formik.touched.employeeId && formik.errors.employeeId}
              required
            ></TextField>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className={classes.field}
              type="text"
              value={formik.values.employee}
              onChange={formik.handleChange}
              error={formik.touched.employee && Boolean(formik.errors.employee)}
              name="employee"
              placeholder="Enter Employee Name"
              helperText={formik.touched.employee && formik.errors.employee}
              required
            ></TextField>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className={classes.field}
              type="text"
              value={formik.values.department}
              onChange={formik.handleChange}
              error={
                formik.touched.department && Boolean(formik.errors.department)
              }
              name="department"
              placeholder="Enter department Name"
              helperText={formik.touched.department && formik.errors.department}
              required
            ></TextField>
          </FormGroup>
          <div className="ml-auto">
            <Button
              type="submit"
              className={classes.btn}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
            <Button
              className={classes.btn}
              variant="contained"
              color="secondary"
              onClick={returnClick}
            >
              <Link to="/employee" onClick={returnClick} className="btnLink">
                Cancel
              </Link>
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};
