import * as actionType from '../actions/actionTypes';

const productsLoaded = (products) => {
    return {
        type: actionType.PRODUCTS_LOADED,
        payload: products
    };
};

const categoriesLoaded = (categories) => {
    return {
        type: actionType.CATEGORIES_LOADED,
        payload: categories
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

const cartItemsLoaded = (cartItems) => {
    return {
        type: actionType.CART_ITEMS_LOADED,
        payload: cartItems
    };
};

const productAddedToCart = (cartItem) => {
    return {
        type: actionType.ADD_PRODUCT_TO_CART,
        payload: cartItem
    };
};

const productRemovedFromCart = (productId) => {
    return {
        type: actionType.REMOVE_PRODUCT_FROM_CART,
        payload: productId
    };
};

const allProductsRemovedFromCart = (productId) => {
    return {
        type: actionType.ALL_PRODUCTS_REMOVED_FROM_CART,
        payload: productId
    };
};

export {
    productsLoaded, 
    categoriesLoaded,
    setFilters,
    userDataLoaded,
    resetUserData,
    cartItemsLoaded,
    productAddedToCart,
    productRemovedFromCart,
    allProductsRemovedFromCart
};