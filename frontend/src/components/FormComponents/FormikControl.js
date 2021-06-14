import React, { Component } from 'react';
import Select from '../TestComponents/Select';

function abcd(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Select {...rest} />
        case 'radio':
        case 'checkbox':
        case 'date':
        default:
            return null
    }
}

export default abcd