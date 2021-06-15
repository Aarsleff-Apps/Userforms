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
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
}));

export default function MUIDropDown(props) {
  const classes = useStyles();
  const [itemID, setItemID] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setItemID(event.target.value);
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
          labelId="itemSelect-label"
          id="itemSelect"
          name={props.name}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={itemID}
          onChange={handleChange}
        >
          {props.data.map((data) => (
            <MenuItem value={data}>{data}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
