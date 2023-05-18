import * as actionType from '../actions/actionTypes';

const initialState = {
    products: [],
    categories: [],
    filters: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionType.PRODUCTS_LOADED:
            return {
                ...state,
                products: action.payload
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
        default:
            return state;
    }
};

export default reducer;