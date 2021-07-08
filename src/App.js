import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Category from './components/categories'
import Products from './components/products';
import Store from './components/storeConnected'
import ProductDetails from './components/productDetails'
import ShoppingCart from './components/shoppingCart';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';

function App(){
    return(
        // <React.Fragment>
        <Router>
            <Header/>
            <Switch>
        <Route exact path='/'>
            <Store/>
        </Route>
        <Route path='/product/:id'>
            <ProductDetails/>
        </Route>
            {/* <Category/>
            <Products/> */}
        <Route path='/cart'>
        <ShoppingCart/>
        </Route>
            </Switch>
         <Footer/>
        </Router>
        // </React.Fragment>
    )
}

export default App;