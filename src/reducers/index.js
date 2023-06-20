import * as actionType from '../actions/actionTypes';
import * as loadingType from '../reducers/constants';

const initialState = {
    productsInfo: { products: [], totalPages: 0, filters: [] },
    categories: [],
    loading: {},
    error: null,
    userData: null,
    cartItems: [],
    details: [],
    categoriesList: [],
};

const reducer = (state = initialState, action) => {
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
            };
        case actionType.CATEGORIES_LOADED:
            return {
                ...state,
                categories: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.CATEGORIES]: false
                },
            };
        case actionType.CATEGORIES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.CATEGORIES]: false
                },
            };
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
        case actionType.CART_ITEMS_REQUESTED:
            return {
                ...state,
                cartItems: [],
                loading: {
                    ...state.loading,
                    [loadingType.CART_ITEMS]: true
                },
                error: null
            };
        case actionType.CART_ITEMS_LOADED:
            return {
                ...state,
                cartItems: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.CART_ITEMS]: false
                },
                error: null
            };
        case actionType.CART_ITEMS_FAILURE:
            return {
                ...state,
                cartItems: [],
                loading: {
                    ...state.loading,
                    [loadingType.CART_ITEMS]: false
                },
                error: action.payload,
            };
        case actionType.ADD_PRODUCT_TO_CART_REQUESTED:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [loadingType.ADD_PRODUCT_TO_CART]: true
                }
            };
        case actionType.ADD_PRODUCT_TO_CART_SUCCESS:
            {
                let cartItems = [...state.cartItems];
                const cartItem = cartItems.find(c => c.product.id === action.payload.product.id);
                if (cartItem) {
                    const index = cartItems.indexOf(cartItem);
                    cartItems[index] = action.payload;
                }
                else {
                    cartItems = [...cartItems, action.payload];
                }
                return {
                    ...state,
                    cartItems,
                    loading: {
                        ...state.loading,
                        [loadingType.ADD_PRODUCT_TO_CART]: false
                    }
                };
            };
        case actionType.ADD_PRODUCT_TO_CART_FAILURE:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [loadingType.ADD_PRODUCT_TO_CART]: false
                },
                error: action.payload,
            };
        case actionType.REMOVE_PRODUCT_FROM_CART_REQUESTED:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [loadingType.REDUCE_PRODUCT]: true
                }
            };
        case actionType.REMOVE_PRODUCT_FROM_CART_SUCCESS:
            {
                let cartItems = [...state.cartItems];
                const cartItem = cartItems.find(c => c.product.id === action.payload);
                if (cartItem.quantity > 1) {
                    const index = cartItems.indexOf(cartItem);
                    cartItems[index] = {
                        ...cartItem,
                        quantity: cartItem.quantity - 1
                    };
                }
                else {
                    cartItems = cartItems.filter(c => c.product.id !== action.payload);
                }
                return {
                    ...state,
                    cartItems,
                    loading: {
                        ...state.loading,
                        [loadingType.REDUCE_PRODUCT]: false
                    }
                };
            };
        case actionType.REMOVE_PRODUCT_FROM_CART_FAILURE:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [loadingType.REDUCE_PRODUCT]: false
                },
                error: action.payload,
            };
        case actionType.ALL_PRODUCTS_REMOVED_FROM_CART_REQUESTED:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [loadingType.REMOVE_PRODUCTS]: true
                }
            };
        case actionType.ALL_PRODUCTS_REMOVED_FROM_CART_SUCCESS:
            {
                const cartItems = state.cartItems.filter(c => c.product.id !== action.payload);
                return {
                    ...state,
                    cartItems,
                    loading: {
                        ...state.loading,
                        [loadingType.REMOVE_PRODUCTS]: false
                    }
                };
            };
        case actionType.ALL_PRODUCTS_REMOVED_FROM_CART_FAILURE:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [loadingType.REMOVE_PRODUCTS]: false
                },
                error: action.payload,
            };
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
        default:
            return state;
    }
};

export default reducer;