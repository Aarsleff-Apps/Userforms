import React, { Component } from 'react';
import { Field, ErrorMessage } from 'formik'

function Select(props) {
    const { label, name, options, ...rest } = props
    return (
        <div className ='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest}>
                     
            </Field>
        </div>
    )
}

export default Select