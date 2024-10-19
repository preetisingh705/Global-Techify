
import * as actionType from '../constants/coursesConstant';

export const getCoursesReducer = (state = { courses: [] }, action) => {
    switch(action.type) {
        case actionType.GET_COURSES_SUCCESS:
            return { courses: action.payload}
        case actionType.GET_COURSES_FAIL:
            return { error: action.payload}
        default:
            return state
    }
}

export const getCoursesDetailsReducer = (state = { courses : {} }, action) => {
    switch(action.type) {
        case actionType.GET_COURSES_DETAILS_REQUEST:
            return { loading: true}
        case actionType.GET_COURSES_DETAILS_SUCCESS:
            return { loading: false, product: action.payload}
        case actionType.GET_COURSES_DETAILS_FAIL:
            return { loading: false, error: action.payload}
        case actionType.GET_COURSES_DETAILS_RESET:
            return { product: {}}
        default:
            return state
    }
}