import { connect } from 'react-redux';
import { Container, Typography, makeStyles } from '@material-ui/core';
import Categories from './categories';
import Products from './products';
import Cart from './cart';
import './connected.css'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(5, 0, 3),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Store = (props) => {
  const classes = useStyles();
  // let category = props.activeCategory.displayName;
  return (
    <main>
      <div>
        <Container >
          <div className="heroDiv">
          <Cart/>
          <Categories />
          <br />
          <br />
          </div>
          <Typography
            component="h3"
            variant="h4"
            align="center"
            color="textPrimary"
            mt="3"
          >
            {props.activeCategory.displayName}
          </Typography>
          <br />
          <Typography
            component="p"
            variant="h5"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            {props.activeCategory.description}
          </Typography>
        </Container>
      </div>
      <Products/>
    </main>
  );
};

const mapStateToProps = (state) => ({
  activeCategory: state.categoriesReducer,
});

export default connect(mapStateToProps)(Store);