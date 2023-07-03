import * as actionType from '../actions/actionTypes';
import * as loadingType from './constants';

const initialState = {
    userData: null,
    loading: {}
};

const userData = (state = initialState, action) => {
    switch (action.type) {
        case actionType.USER_DATA_REQUESTED:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [loadingType.USER_DATA]: true
                }
            };
        case actionType.USER_DATA_LOADED:
            return {
                ...state,
                userData: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.USER_DATA]: false
                }
            };
        case actionType.RESET_USER_DATA:
            return {
                ...state,
                userData: null
            };
        default:
            return state;
    }
};

export default userData;