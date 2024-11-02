import { createStore, combineReducers, applyMiddleware } from 'redux';

import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getCoursesReducer , getCoursesDetailsReducer } from './reducers/coursesReducer';


const reducer = combineReducers({
    getCourses: getCoursesReducer,
    getCoursesDetails: getCoursesDetailsReducer,
});

const middleware = [thunk];

const store = createStore (
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;