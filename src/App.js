import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Category from './components/categories'
import Products from './components/products';
import Store from './components/storeConnected'

function App(){
    return(
        <React.Fragment>
            <Header/>
            <Store/>
            {/* <Category/>
            <Products/> */}
         <Footer/>
        </React.Fragment>
    )
}

export default App;