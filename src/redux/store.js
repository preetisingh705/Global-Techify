import { createStore, combineReducers, applyMiddleware } from 'redux';

import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getCoursesReducer , getCoursesDetailsReducer } from './reducers/coursesReducer';
// import { cartReducer } from './reducers/cartReducer';


const reducer = combineReducers({
    getCourses: getCoursesReducer,
    getCoursesDetails: getCoursesDetailsReducer,
    // cart:  cartReducer
});

const middleware = [thunk];

const store = createStore (
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;