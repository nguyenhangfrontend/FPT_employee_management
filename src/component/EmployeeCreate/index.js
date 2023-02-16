import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { useParams } from "react-router-dom";
import { Button, Radio } from "@mui/material";
import { required, fieldLength, email, phone } from "../../utilities";
import renderTextField from "../common/TextField";
import renderRadioGroup from "../common/Radio";
import { createEmployee, UpdateEmployee, getDetailEmployee } from "../../api_services/employee";
import { Main } from "./styled";
import { connect } from 'react-redux';

let EmployeeCreate = (props) => {
  let param = useParams();
  const { handleSubmit, pristine, submitting } = props;

  useEffect(() => {
   
    if(param?.id){
      getDetailEmployee(param?.id);
    }
   
  }, [param?.id]);


  const submit = (values) => {
    if (param?.id) {
      UpdateEmployee(param?.id, values);
    } else {
      createEmployee(values);
      window.location.href = "/"
    }
  };
  return (
    <Main onSubmit={handleSubmit(submit)}>
      <h2>{param?.id ? "Edit Employee" : "Create Employee"}</h2>
      <Field
        name="firstName"
        component={renderTextField}
        label="First Name"
        validate={[required, fieldLength]}
        className="field"

      />
      <Field
        className="field"
        name="lastName"
        component={renderTextField}
        validate={[required, fieldLength]}
        label="Last Name"
      />
      <Field
        className="field"
        name="email"
        component={renderTextField}
        label="Email"
        validate={[email]}
      />
      <Field
        className="field"
        name="phone"
        component={renderTextField}
        label="Phone"
        validate={[phone]}
      />

      <Field
        label="gender"
        className="field"
        name="sex"
        component={renderRadioGroup}
      >
        <Radio value="male" label="male" />
        <Radio value="female" label="female" />
      </Field>
      <Button
        className="button-create"
        variant="contained"
        type="submit"
        disabled={pristine || submitting}
      >
        Submit
      </Button>
    </Main>
  );
};


EmployeeCreate = reduxForm({
  form: "EmployeeCreate",
  enableReinitialize: true
})(EmployeeCreate)

EmployeeCreate = connect(state => ({
  initialValues: state.employee.employeeInfo
})
)(EmployeeCreate)

export default EmployeeCreate