import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { activateCategory} from '../store/categoriesReducer';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
const Category = props=>{
    const classes = useStyles();
    return(
       <>
  <div className={classes.root} style={{textAlign: "center"}}>
      <Button disabled>Browse our Categories</Button>
      {console.log(props.activeCat.categories)}
     {props.activeCat.categories.map((element)=>

    <Button variant="outlined" color="secondary" onClick={()=> props.activateCategory(element.name)}>
        {element.displayName}
        </Button>
     )}
  </div>
       </>
    )
}

const mapStateToProps = (state) =>({
    activeCat : state.categoriesReducer,
});

const mapDispatchToProps = {activateCategory};

export default connect(mapStateToProps, mapDispatchToProps)(Category);





