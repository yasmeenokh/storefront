import React from 'react';
import { connect } from 'react-redux';
// import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { activateCategory, reset } from '../store/categoriesReducer';

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
     <Button variant="outlined" color="secondary" onClick={()=> props.reset}>
         Reset
        </Button>
  </div>
  <div>
      <h3 style={{textAlign: "center", fontWeight:"900"}}>All Products </h3>
  </div>
       </>
    )
}

const mapStateToProps = (state) =>({
    activeCat : state.categoriesReducer,
});

const mapDispatchToProps = {activateCategory};

export default connect(mapStateToProps, mapDispatchToProps)(Category);





