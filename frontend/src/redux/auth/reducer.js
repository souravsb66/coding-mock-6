import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionType";

const initalState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    user: {}
}

export const reducer = (state=initalState, {type, payload}) => {
    switch(type) {
        case GET_USER_REQUEST:
            return {...state, isLoading: true};
        case GET_USER_FAILURE:
            return {...state, isLoading: false, isError: true};
        case GET_USER_SUCCESS:
            return {...state, isLoading: false, isError: false, isAuth: true, user: {...payload}};
        default: 
            return {...state};
    }
}