import * as actionType from '../actions/actionTypes';
import * as loadingType from '../reducers/constants';

const initialState = {
    products: [],
    categories: [],
    filters: [],
    loading: {},
    error: null,
    userData: null,
    cartItems: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.PRODUCTS_REQUESTED:
            return {
                ...state,
                products: [],
                loading: {
                    ...state.loading,
                    [loadingType.PRODUCTS]: true
                },
                error: null
            };
        case actionType.PRODUCTS_LOADED:
            return {
                ...state,
                products: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.PRODUCTS]: false
                },
                error: null
            };
        case actionType.PRODUCTS_FAILURE:
            return {
                ...state,
                products: [],
                loading: {
                    ...state.loading,
                    [loadingType.PRODUCTS]: false
                },
                error: action.payload,
            };
        case actionType.CATEGORIES_REQUESTED:
            return {
                ...state,
                categories: action.payload,
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
                categories: action.payload,
                loading: {
                    ...state.loading,
                    [loadingType.CATEGORIES]: false
                },
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
            {
                return {
                    ...state,
                    loading: {
                        ...state.loading,
                        [loadingType.ADD_PRODUCT_TO_CART]: true
                    }
                };
            }
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
            }
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
            }
        case actionType.ALL_PRODUCTS_REMOVED_FROM_CART_REQUESTED:
            {
                return {
                    ...state,
                    loading: {
                        ...state.loading,
                        [loadingType.REMOVE_PRODUCTS]: true
                    }
                };
            }
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
            }
        default:
            return state;
    }
};

export default reducer;