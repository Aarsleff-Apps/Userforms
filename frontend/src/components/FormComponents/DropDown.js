import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    width: "100%",
    height: "25%",
    fontSize: 50,
    paddingBottom: 10,
  },
}));

export default function DropDown(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState("");

  console.log(data)
  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="itemSelect-label">{props.name}</InputLabel>
        <Select
          id="outlined-basic" 
          variant="outlined"
          labelId="itemSelect-label"
          name={props.name}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={props.handleChange}
        >
          {props.data.map((items) => (
            <MenuItem value={items}>{items}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
