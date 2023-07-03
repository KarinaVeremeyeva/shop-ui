import * as actionType from './actionTypes';

export const userDataRequested = () => {
    return {
        type: actionType.USER_DATA_REQUESTED,
    };
};

export const userDataLoaded = (userData) => {
    return {
        type: actionType.USER_DATA_LOADED,
        payload: userData
    };
};

export const resetUserData = () => {
    return {
        type: actionType.RESET_USER_DATA,
    };
};

export const cartItemsRequested = () => {
    return {
        type: actionType.CART_ITEMS_REQUESTED,
    };
};

export const cartItemsLoaded = (cartItems) => {
    return {
        type: actionType.CART_ITEMS_LOADED,
        payload: cartItems
    };
};

export const cartItemsError = (error) => {
    return {
        type: actionType.CART_ITEMS_FAILURE,
        payload: error
    };
};

export const requestAddProductToCart = () => {
    return {
        type: actionType.ADD_PRODUCT_TO_CART_REQUESTED,
    };
};

export const productAddedToCart = (cartItem) => {
    return {
        type: actionType.ADD_PRODUCT_TO_CART_SUCCESS,
        payload: cartItem
    };
};

export const addProductToCartError = (error) => {
    return {
        type: actionType.ADD_PRODUCT_TO_CART_FAILURE,
        payload: error
    };
};

export const requestRemoveProductFromCart = () => {
    return {
        type: actionType.REMOVE_PRODUCT_FROM_CART_REQUESTED,
    };
};

export const productRemovedFromCart = (productId) => {
    return {
        type: actionType.REMOVE_PRODUCT_FROM_CART_SUCCESS,
        payload: productId
    };
};

export const removeProductFromCartError = (error) => {
    return {
        type: actionType.REMOVE_PRODUCT_FROM_CART_FAILURE,
        payload: error
    };
};

export const requestRemoveAllProductsFromCart = () => {
    return {
        type: actionType.ALL_PRODUCTS_REMOVED_FROM_CART_REQUESTED,
    };
};

export const allProductsRemovedFromCart = (productId) => {
    return {
        type: actionType.ALL_PRODUCTS_REMOVED_FROM_CART_SUCCESS,
        payload: productId
    };
};

export const removeAllProductsFromCartError = (error) => {
    return {
        type: actionType.ALL_PRODUCTS_REMOVED_FROM_CART_FAILURE,
        payload: error
    };
};