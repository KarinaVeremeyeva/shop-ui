import * as actionType from '../actions/actionTypes';
import * as loadingType from './constants';

const initialState = {
    userData: null,
    loading: {},
    error: null
};

const userData = (state = initialState, action) => {
    switch (action.type) {
        case actionType.USER_DATA_REQUESTED:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [loadingType.USER_DATA]: true
                },
                error: null
            };
        case actionType.USER_DATA_LOADED:
            return {
                ...state,
                userData: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.USER_DATA]: false
                },
                error: null
            };
        case actionType.USER_DATA_FAILURE:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [loadingType.USER_DATA]: false
                },
                error: action.payload
            }
        case actionType.RESET_USER_DATA:
            return {
                ...state,
                userData: null,
                loading: {
                    ...state.loading,
                    [loadingType.USER_DATA]: false
                },
            };
        default:
            return state;
    }
};

export default userData;