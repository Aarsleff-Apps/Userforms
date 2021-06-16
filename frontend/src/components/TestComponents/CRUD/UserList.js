  
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Route, useHistory } from "react-router";
import { Link } from "react-router-dom";


export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <div className="centralContainer">
      {users.length > 0 ? (
        <div className="backgroundCard">
          {users.map(user => (
            <ul className="card" key={user.id}>
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link to={`crud/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
              </div>
            </ul>
          ))}
        </div>
      ) : (
          <h4 className="text-center">No Users</h4>
        )}
    </div>
  )
}