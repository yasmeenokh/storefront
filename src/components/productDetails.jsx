import React from 'react';
// import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import {Card, CardMedia, CardContent, Typography, Button} from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import {updateRemoteData} from '../store/actions'
import products from './products';
import './details.css'

// function usePageViews() {
//   let location = useLocation();
//   React.useEffect(() => {
//     ga.send(["pageview", location.pathname]);
//   }, [location]);
// }

const ProductDetails = (props)=>{
  const state = useSelector((state)=>{
    return{
      items : state.productsReducer,
    }
  })
  const handleInput = (e)=>{
    alert('Thank You For Your Feedback');
  }
  const dispatch = useDispatch();
  const location = useLocation();
    const useStyles = makeStyles({
        root: {
          maxWidth: 350,
          display: "inline-block",
          margin: 50,
        },
        media: {
          height: 300,
          width: 300,
          margin: "auto",
        },
      });
      const classes = useStyles();
    return(
        <>
          {state.items.products.filter(element=> {
            return element._id === location.pathname.split('/')[2]
          }).map(element=>{
            return (
              <>
       <Card className="details">
            <Typography gutterBottom variant="h5" component="h2">
            {console.log('from the details page', state.items.products)}
            {element.name}
        </Typography>
        <CardMedia className={classes.media} image={element.url} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Price :{element.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            In Stock: {element.availableQuantity}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            Description: Made With Care.
          </Typography>
        </CardContent>
      </Card>
        <Button className="btnBuy" size="small" color="primary" variant="outlined" onClick={()=> {dispatch(updateRemoteData(element._id))}}>Add To Cart</Button>
        </>
        )
      })
      }
      <div className="feedBack">
        <h5>Please inform us if you have any Feedback</h5>
        <input  style={{height: '60px'}}/>
        <Button className="btnBuy" 
        className="btnBuy" size="small" 
        color="primary" 
        variant="outlined"
        style={{marginLeft: '1%'}}
        onClick={handleInput}
        >Send </Button>
      </div>
        </>
)
    }

// const mapStateToProps = (state)=>({
//     productsList: state.productsReducer.details
//   });

// export default connect(mapStateToProps)(ProductDetails);
export default ProductDetails;