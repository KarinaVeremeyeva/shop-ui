import * as actionType from '../actions/actionTypes';
import * as loadingType from './constants';

const initialState = {
    loading: {},
    error: null,
    details: [],
    categoriesList: [],
    productsList: []
};

const admin = (state = initialState, action) => {
    switch (action.type) {
        case actionType.DETAILS_REQUESTED:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [loadingType.DETAILS]: true
                },
                error: null
            };
        case actionType.DETAILS_LOADED:
            return {
                ...state,
                details: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.DETAILS]: false
                },
                error: null
            };
        case actionType.DETAILS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.DETAILS]: false
                },
            };
        case actionType.ADD_DETAIL_REQUESTED:
            return {
                ...state,
                error: null
            };
        case actionType.ADD_DETAIL_SUCCESS:
            {
                const details = [action.payload, ...state.details];
                return {
                    ...state,
                    details,
                    error: null
                };
            }
        case actionType.ADD_DETAIL_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case actionType.UPDATE_DETAIL_REQUESTED:
            return {
                ...state,
                error: null
            };
        case actionType.UPDATE_DETAIL_SUCCESS:
            {
                const details = [...state.details];
                const index = details.findIndex(d => d.id === action.payload.id)
                details[index] = action.payload;
                return {
                    ...state,
                    details,
                    error: null
                };
            }
        case actionType.UPDATE_DETAIL_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case actionType.REMOVE_DETAIL_REQUESTED:
            return {
                ...state,
                error: null
            };
        case actionType.REMOVE_DETAIL_SUCCESS:
            const details = state.details.filter(d => d.id !== action.payload);
            return {
                ...state,
                details,
                error: null
            };
        case actionType.REMOVE_DETAIL_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case actionType.CATEGORIES_LIST_REQUESTED:
            return {
                ...state,
                error: null,
                loading: {
                    ...state.loading,
                    [loadingType.CATEGORIES_LIST]: true
                }
            };
        case actionType.CATEGORIES_LIST_SUCCESS:
            return {
                ...state,
                error: null,
                categoriesList: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.CATEGORIES_LIST]: false
                }
            };
        case actionType.CATEGORIES_LIST_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.CATEGORIES_LIST]: false
                }
            };
        case actionType.ADD_CATEGORY_REQUESTED:
            return {
                ...state,
                error: null
            };
        case actionType.ADD_CATEGORY_SUCCESS:
            {
                const categoriesList = [action.payload, ...state.categoriesList];
                return {
                    ...state,
                    categoriesList,
                    error: null
                };
            }
        case actionType.ADD_CATEGORY_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case actionType.UPDATE_CATEGORY_REQUESTED:
            return {
                ...state,
                error: null
            };
        case actionType.UPDATE_CATEGORY_SUCCESS:
            {
                const categoriesList = [...state.categoriesList];
                const index = categoriesList.findIndex(c => c.id === action.payload.id)
                categoriesList[index] = action.payload;
                return {
                    ...state,
                    categoriesList,
                    error: null
                };
            }
        case actionType.UPDATE_CATEGORY_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case actionType.REMOVE_CATEGORY_REQUESTED:
            return {
                ...state,
                error: null
            };
        case actionType.REMOVE_CATEGORY_SUCCESS:
            const categoriesList = state.categoriesList.filter(c => c.id !== action.payload);
            return {
                ...state,
                categoriesList,
                error: null
            };
        case actionType.REMOVE_CATEGORY_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case actionType.PRODUCTS_LIST_REQUESTED:
            return {
                ...state,
                error: null,
                loading: {
                    ...state.loading,
                    [loadingType.PRODUCTS_LIST]: true
                }
            };
        case actionType.PRODUCTS_LIST_SUCCESS:
            return {
                ...state,
                productsList: action.payload,
                error: null,
                loading: {
                    ...state.loading,
                    [loadingType.PRODUCTS_LIST]: false
                }
            };
        case actionType.PRODUCTS_LIST_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.PRODUCTS_LIST]: false
                }
            };
        case actionType.ADD_PRODUCT_REQUESTED:
            return {
                ...state,
                error: null
            };
        case actionType.ADD_PRODUCT_SUCCESS:
            {
                const productsList = [action.payload, ...state.productsList];
                return {
                    ...state,
                    productsList,
                    error: null
                };
            }
        case actionType.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case actionType.UPDATE_PRODUCT_REQUESTED:
            return {
                ...state,
                error: null
            };
        case actionType.UPDATE_PRODUCT_SUCCESS:
            {
                const productsList = [...state.productsList];
                const index = productsList.findIndex(p => p.id === action.payload.id);
                productsList[index] = action.payload;
                return {
                    ...state,
                    productsList,
                    error: null
                };
            }
        case actionType.UPDATE_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case actionType.REMOVE_PRODUCT_REQUESTED:
            return {
                ...state,
                error: null
            };
        case actionType.REMOVE_PRODUCT_SUCCESS:
            const productsList = state.productsList.filter(p => p.id !== action.payload);
            return {
                ...state,
                productsList,
                error: null
            };
        case actionType.REMOVE_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default admin;