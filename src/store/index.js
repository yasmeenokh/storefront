import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";
import cartReducer from "./cartReducer";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "./middleware";

let reducers = combineReducers({categoriesReducer, productsReducer, cartReducer});

const store = ()=>{
    return createStore(reducers, applyMiddleware(thunk))
}

export default store();