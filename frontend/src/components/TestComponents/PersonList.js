import axios from 'axios';
import React, { Component } from 'react';

export default class PersonList extends React.Component {

    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('api/users')
        .then(res => {
            console.log(res);
            this.setState({persons: res.data});
        })
    }

    render() {
        return (
            <ul>
            {this.state.persons.map(person => <li>{person.employee}</li>)}
            </ul>
        )
    }
}