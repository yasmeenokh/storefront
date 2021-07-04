import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";

import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({categoriesReducer, productsReducer});

const store = ()=>{
    return createStore(reducers, composeWithDevTools())
}

export default store();