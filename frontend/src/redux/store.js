import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import {walletsReducer} from "./reducer";

const middlewares = [ReduxThunk];

const store = createStore(walletsReducer, applyMiddleware(...middlewares));

export default store;