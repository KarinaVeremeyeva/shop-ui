import * as actionType from '../actions/actionTypes';
import * as loadingType from './constants';

const initialState = {
    cartItems: [],
    loading: {},
    error: null,
};

const user = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
};

export default user;