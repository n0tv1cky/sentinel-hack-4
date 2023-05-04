import {configureStore} from '@reduxjs/toolkit'
import { legacy_createStore as createStore} from 'redux'
import { combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from './Reducers/UserReducer';

const reducer = combineReducers({
    
    user: userReducer
});
const initialState = {}

const middleware = [thunk];
// const store = configureStore(initialState, {
//     reducer: {
//         user: userReducer
//     }
// })

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default store;