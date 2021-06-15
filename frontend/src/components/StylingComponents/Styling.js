import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles({

    btn: {
      background: '#1F85DE',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      margin: '5%',
      padding: '0 25%',
    },
    field: {
       width: '100%',
    },
    fieldContainer: {
      display: 'flexbox',
      justifyContent: 'center',
      padding: '2rem'
    },
    dateStyle: {
      width: '180px',
  
    }
  
  });

export { useStyles }