import * as actionType from '../actions/actionTypes';

const initialState = {
    products: [],
    categories: [],
    filters: [],
    loading: true,
    userData: null,
    cartItems: [],
    productId: {}
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
            };
        case actionType.CART_ITEMS_LOADED:
            return {
                ...state,
                cartItems: action.payload
            };
        case actionType.ADD_PRODUCT_TO_CART:
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
                    cartItems
                };
            }
        case actionType.REMOVE_PRODUCT_FROM_CART:
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
                    cartItems
                };
            }
        case actionType.ALL_PRODUCTS_REMOVED_FROM_CART:
            {
                const cartItems = state.cartItems.filter(c => c.product.id !== action.payload);
                return {
                    ...state,
                    cartItems
                };
            }
        default:
            return state;
    }
};

export default reducer;