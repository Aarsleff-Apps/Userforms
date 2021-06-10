import React, { Component } from 'react'
import { Form, Formik, useField } from "formik";
import { TextField } from "@material-ui/core";
import * as Yup from 'yup';

class FormikTest extends Component {

  constructor(props) {
      super(props);
      this.state = {
          employeeID: this.employeeID,
          employeeName: this.employeeName,
          jobID: this.jobID,
          jobName: this.jobName,
          hours: this.hours,
      }

      this.handleFormButtonPressed = this.handleFormButtonPressed.bind(this);         //allows dom to access this once its binded to main constructor
      this.employeeIDChange = this.handleEmployeeIDChange.bind(this);
      this.employeeNameChange = this.handleEmployeeNameChange.bind(this);
      this.jobID = this.handleJobID.bind(this);
      this.jobName = this.handleJobName.bind(this);
      this.hours = this.handleHours.bind(this);

  }

  handleEmployeeIDChange(e)  {
      this.setState({
          employeeID: e.target.value,
      })
      
  }

  handleEmployeeNameChange(e)  {
    this.setState({
      employeeName: e.target.value,
    })
    
}
handleJobID(e)  {
  this.setState({
      jobID: e.target.value,
  })
  
}

handleJobName(e)  {
  this.setState({
      jobName: e.target.value,
  })
  
}

handleHours(e)  {
  this.setState({
      hours: e.target.value,
  })
  
}


  handleFormButtonPressed(){
      const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              employee_id: this.state.employeeID,   //the object names should match the views.py
              employee: this.state.employeeName,
              job_id: this.state.jobID,
              job: this.state.jobName,
              hours: this.state.hours,
          })
      };
      fetch('api/create/', requestOptions)
          .then((response) => response.json())
  }

  render() {
    return (

        <Formik
          initialValues={{
            employeeID: '', 
            employeeName: '',
            jobID: '',
            job: '',
            hours: '',
            specialPower: ''
          }}
          validationSchema={Yup.object({
            employeeID: Yup.number()
            .required('Required'),
            employeeName: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(15, 'Must be 15 char or less')
            .required('Required'),
            jobID: Yup.number()
            .required('Required'),
            job: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(15, 'Must be 15 char or less')
            .required('Required'),
            hours: Yup.string()
            .required('Required'),
            specialPower: Yup.string()
              .oneOf(['flight', 'invisibility', 'wealthy bat guy', 'other'], 'Invalid special power')
          })}
            // onSubmit={(values, { setSubmitting, resetForm }) => {
            //     console.log(JSON.stringify(values,null,2));
            //     resetForm();
            //     setSubmitting(false);
            // }}
          >
            {props => (
              <Form onSubmit={this.handleFormButtonPressed.bind(this)}>
                <h1>Timesheet</h1>
                <TextField label="Employee ID" name="employeeID" type="text" placeholder="1234" onChange={this.handleEmployeeIDChange.bind(this)}/>
                <TextField label="Employee Name" name="employeeName" type="text" placeholder="frank" onChange={this.handleEmployeeNameChange.bind(this)} />
                <TextField label="Job ID" name="jobID" type="text" placeholder="2345" onChange={this.handleJobID.bind(this)}/>
                <TextField label="Job Name" name="job" type="text" placeholder="Geo" onChange={this.handleJobName.bind(this)}/>
                <TextField label="Hours" name="hours" type="text" placeholder="8" onChange={this.handleHours.bind(this)}/>
                {/* <CustomSelect label="Special Power" name="specialPower">
                  <option value="">Select a Special Power</option>
                  <option value="flight">flight</option>
                  <option value="invisibility">invisibility</option>
                  <option value="wealthy bat guy">wealthy bat guy</option>
                  <option value="other">other</option>
                </CustomSelect> */}
                <Button type="submit">{props.isSubmitting ? 'Loading...' : 'Submit'}</Button>
              </Form>
            )}
        </Formik>

    );
  }
}

export default FormikTest;
