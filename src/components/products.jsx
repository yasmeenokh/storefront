import { connect } from "react-redux";
import {add } from '../store/cartReducer'
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

  return (
      <>
      <div className='cardDiv'>
        {console.log('kkkkkkkkk',props.productsList)}
      {props.productsList.map((element)=>{
        if(element.availableQuantity === 0){
          return;
        }
          return(
    <Card className={classes.root}>
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"
        onClick={()=> props.add(element)}
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
const mapDispatchToProps = {add};
export default connect(mapStateToProps, mapDispatchToProps)(Products)