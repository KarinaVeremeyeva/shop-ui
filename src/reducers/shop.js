import * as actionType from '../actions/actionTypes';
import * as loadingType from './constants';

const initialState = {
    productsInfo: { products: [], totalPages: 0, filters: [] },
    categories: [],
    loading: {},
    error: null
};

const shop = (state = initialState, action) => {
    switch (action.type) {
        case actionType.PRODUCTS_REQUESTED:
            return {
                ...state,
                productsInfo: { products: [], totalPages: 0, filters: [] },
                loading: {
                    ...state.loading,
                    [loadingType.PRODUCTS]: true
                },
                error: null
            };
        case actionType.PRODUCTS_LOADED:
            return {
                ...state,
                productsInfo: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.PRODUCTS]: false
                },
                error: null
            };
        case actionType.PRODUCTS_FAILURE:
            return {
                ...state,
                productsInfo: { products: [], totalPages: 0, filters: [] },
                loading: {
                    ...state.loading,
                    [loadingType.PRODUCTS]: false
                },
                error: action.payload,
            };
        case actionType.CATEGORIES_REQUESTED:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [loadingType.CATEGORIES]: true
                },
                error: null
            };
        case actionType.CATEGORIES_LOADED:
            return {
                ...state,
                categories: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.CATEGORIES]: false
                },
                error: null
            };
        case actionType.CATEGORIES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.CATEGORIES]: false
                }
            };
        default:
            return state;
    }
};

export default shop;