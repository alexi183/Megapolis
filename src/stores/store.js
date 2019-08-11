import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import postReducer from '../reducers/PostReducer';

const reducer = combineReducers({
   post: postReducer
});


const store = createStore(
    reducer,
    applyMiddleware(promise, reduxThunk, logger));

export default store;


