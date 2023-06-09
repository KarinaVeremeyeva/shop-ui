import * as actionType from '../actions/actionTypes';

const productsRequested = () => {
    return {
        type: actionType.PRODUCTS_REQUESTED,
    };
};

const productsLoaded = (products) => {
    return {
        type: actionType.PRODUCTS_LOADED,
        payload: products
    };
};

const productsError = (error) => {
    return {
        type: actionType.PRODUCTS_FAILURE,
        payload: error
    };
};

const categoriesRequested = () => {
    return {
        type: actionType.CATEGORIES_REQUESTED,
    };
};

const categoriesLoaded = (categories) => {
    return {
        type: actionType.CATEGORIES_LOADED,
        payload: categories
    };
};

const categoriesError = (error) => {
    return {
        type: actionType.CATEGORIES_FAILURE,
        payload: error
    };
};

const setFilters = (filters) => {
    return {
        type: actionType.SET_FILTERS,
        payload: filters
    };
};

const userDataLoaded = (userData) => {
    return {
        type: actionType.USER_DATA_LOADED,
        payload: userData
    };
};

const resetUserData = () => {
    return {
        type: actionType.RESET_USER_DATA,
    };
};

const cartItemsRequested = () => {
    return {
        type: actionType.CART_ITEMS_REQUESTED,
    };
};

const cartItemsLoaded = (cartItems) => {
    return {
        type: actionType.CART_ITEMS_LOADED,
        payload: cartItems
    };
};

const cartItemsError = (error) => {
    return {
        type: actionType.CART_ITEMS_FAILURE,
        payload: error
    };
};

const requestAddProductToCart = () => {
    return {
        type: actionType.ADD_PRODUCT_TO_CART_REQUESTED,
    };
};

const productAddedToCart = (cartItem) => {
    return {
        type: actionType.ADD_PRODUCT_TO_CART_SUCCESS,
        payload: cartItem
    };
};

const addProductToCartError = (error) => {
    return {
        type: actionType.ADD_PRODUCT_TO_CART_FAILURE,
        payload: error
    };
};

const requestRemoveProductFromCart = () => {
    return {
        type: actionType.REMOVE_PRODUCT_FROM_CART_REQUESTED,
    };
};

const productRemovedFromCart = (productId) => {
    return {
        type: actionType.REMOVE_PRODUCT_FROM_CART_SUCCESS,
        payload: productId
    };
};

const removeProductFromCartError = (error) => {
    return {
        type: actionType.REMOVE_PRODUCT_FROM_CART_FAILURE,
        payload: error
    };
};

const requestRemoveAllProductsFromCart = () => {
    return {
        type: actionType.ALL_PRODUCTS_REMOVED_FROM_CART_REQUESTED,
    };
};

const allProductsRemovedFromCart = (productId) => {
    return {
        type: actionType.ALL_PRODUCTS_REMOVED_FROM_CART_SUCCESS,
        payload: productId
    };
};

const removeAllProductsFromCartError = (error) => {
    return {
        type: actionType.ALL_PRODUCTS_REMOVED_FROM_CART_FAILURE,
        payload: error
    };
};

export {
    productsRequested,
    productsLoaded, 
    productsError,
    categoriesRequested,
    categoriesLoaded,
    categoriesError,
    setFilters,
    userDataLoaded,
    resetUserData,
    cartItemsRequested,
    cartItemsLoaded,
    cartItemsError,
    requestAddProductToCart,
    productAddedToCart,
    addProductToCartError,
    requestRemoveProductFromCart,
    productRemovedFromCart,
    removeProductFromCartError,
    requestRemoveAllProductsFromCart,
    allProductsRemovedFromCart,
    removeAllProductsFromCartError
};