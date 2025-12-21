import { SET_USER, LOGOUT_USER, SET_LOADING } from '../actions/userActions';

const initialState = {
    user: null,
    loading: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
