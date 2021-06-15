
import * as Yup from "yup";


// Employee Form
const employeeValidationSchema = Yup.object({
    // employeeID: Yup.number().required("Required"),    //commented code requires validation based on list rather than entry by user.
    employeeName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be 15 char or less")
      .required("Required"),
    jobID: Yup.number().required("Required"),
    // job: Yup.string()
    //   .min(3, "Must be at least 3 characters")
    //   .max(15, "Must be 15 char or less")
    // .required("Required"),
    hours: Yup.number()
      .required("Required")
      .min(8, "Please enter a minimum of 8 hours")
      .max(12, "Hours must not exceed 12"),
  
    date: Yup.date().required("Required"),
    specialPower: Yup.string().oneOf(
      ["flight", "invisibility", "wealthy bat guy", "other"],
      "Invalid special power"
    ),
  });

  // Salary Form
  const salaryValidationSchema = Yup.object({
    employeeID: Yup.number().required("Required"),
    employeeName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be 15 char or less")
      .required("Required"),
    salaryWeekly: Yup.number().required("Required"),
  
  });
  
  export { employeeValidationSchema, salaryValidationSchema }