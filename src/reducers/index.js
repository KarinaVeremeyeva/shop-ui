import * as actionType from '../actions/actionTypes';

const initialState = {
    products: [],
    categories: [],
    filters: [],
    loading: true,
    userData: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionType.PRODUCTS_LOADED:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case actionType.CATEGORIES_LOADED:
            return {
                ...state,
                categories: action.payload
            };
        case actionType.SET_FILTERS:
            return {
                ...state,
                filters: action.payload
            };
        case actionType.USER_DATA_LOADED:
            return {
                ...state,
                userData: action.payload
            };
        case actionType.RESET_USER_DATA:
            return {
                ...state,
                userData: null
            }
        default:
            return state;
    }
};

export default reducer;