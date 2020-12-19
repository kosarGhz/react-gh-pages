import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  buttn: {
    '& > *': {
      margin: theme.spacing(1),
     
      color: 'hsl(0, 100%, 30%);',
      padding: '16px 32px',
      height: 15,
       width: 15,
       border: '5px solid pink',
    
    },
  },
}));

function Square(props) {
  const classes = useStyles();
    return (
      <Button className={classes.buttn}   onClick={props.onClick}>
        {props.value}
      </Button>
    );
  }
 
export default Square;