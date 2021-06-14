import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%'
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [employeeName, setemployeeName] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setemployeeName(event.target.value);
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
        <InputLabel id="demo-controlled-open-select-label">Employee Name</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={employeeName}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Person 1</MenuItem>
          <MenuItem value={20}>Person 2</MenuItem>
          <MenuItem value={30}>Person 3</MenuItem>
          <MenuItem value={40}>Person 4</MenuItem>
          <MenuItem value={50}>Person 5</MenuItem>
          <MenuItem value={60}>Person 6</MenuItem>
          <MenuItem value={70}>Person 7</MenuItem>
          <MenuItem value={80}>Person 8</MenuItem>
          <MenuItem value={90}>Person 9</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}