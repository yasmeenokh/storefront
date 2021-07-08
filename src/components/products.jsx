import { connect } from "react-redux";
import {updateRemoteData } from '../store/actions'
import {getRemoteData } from '../store/actions'
import { useDispatch } from "react-redux";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import './cards.css'
import { useEffect } from 'react';


const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const Products= (props) => {
  const classes = useStyles();
  useEffect(()=>{
    props.getRemoteData();
  },[])

  return (
      <>
      <div className='cardDiv'>
        {console.log('kkkkkkkkk',props.productsList)}
      {props.productsList.map((element, idx)=>{
        if(element.availableQuantity === 0){
          return;
        }
          return(
    <Card className={classes.root} key={idx}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={element.url}
          title=''
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
                {element.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Price : {element.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Quantity : {element.availableQuantity}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"
        onClick={()=> props.updateRemoteData(element)}
        >
          Add To Cart
        </Button>
          {console.log('afterAddition', props.productsList)}
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
          )
      })
    }
    </div>
      </>
      );
}

const mapStateToProps = (state)=>({
    productsList : state.productsReducer.products
});
const mapDispatchToProps = {updateRemoteData, getRemoteData };
export default connect(mapStateToProps, mapDispatchToProps)(Products)