
import axios from 'axios';

import * as actionTypes from '../constants/coursesConstant';

const URL = 'http://localhost:8000';

export const getCourses = () => async(dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/courses`);
        dispatch({ type: actionTypes.GET_COURSES_SUCCESS, payload: data })
    }catch (error) {
        dispatch({ type: actionTypes.GET_COURSES_FAIL, payload: error.message })

    }
}


export const getProductDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_COURSES_DETAILS_REQUEST});
        const { data } = await axios.get(`${URL}/product/${id}`);

        dispatch({ type: actionTypes.GET_COURSES_DETAILS_SUCCESS, payload: data });
    }catch (error) {
        dispatch({ type: actionTypes.GET_COURSES_DETAILS_FAIL, payload: error.message })

    }
}
