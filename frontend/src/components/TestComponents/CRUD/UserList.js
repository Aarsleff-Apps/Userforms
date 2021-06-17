  
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Route, useHistory } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  btn: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: '100%',
    width: "25%",
    fontSize: "2rem",
    margin: '5%',
    paddingLeft: '15%',
    paddingRight: '15%'},
    btnEdit: {
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      background: "#f6e486",
      height: '100%',
      width: "25%",
      fontSize: "2rem",
      margin: '5%',
      paddingLeft: '15%',
      paddingRight: '15%'}
  
  
  })
  


export const UserList = () => {
  const classes = useStyles() 
  const { users, removeUser } = useContext(GlobalContext);

  const history = useHistory();
  const addClick = () => history.push('/crud/add');

  return (
    <div className="centralContainer">
      {users.length > 0 ? (
        <div className="backgroundCard">
          {users.map(user => (
            <div className="card" key={user.id}>
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Button  className={classes.btnEdit} variant="contained"   ><Link className="btnLink" to={`crud/edit/${user.id}`}>Edit</Link></Button>
                <Button className={classes.btn} variant="contained"  color="secondary" onClick={() => removeUser(user.id)} >Delete</Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
          <h4 className="text-center">No Users</h4>
        )}
    </div>
  )
}