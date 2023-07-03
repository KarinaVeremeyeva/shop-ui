import * as actionType from './actionTypes';

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

export const fetchCartItems = shopService => async dispatch => {
    await dispatch(cartItemsRequested());
    try {
        const cartItems = await shopService.getCartItems();
        return await dispatch(cartItemsLoaded(cartItems));
    }
    catch (error){
        await dispatch(cartItemsError(error));
    }
};

export const addProductToCart = (shopService, productId) => async dispatch => {
    await dispatch(requestAddProductToCart());
    try {
        const cartItem = await shopService.addToCart(productId);
        return await dispatch(productAddedToCart(cartItem));
    }
    catch (error) {
        return await dispatch(addProductToCartError(error));
    }
};

export const reduceProductCount = (shopService, productId) => async dispatch => {
    await dispatch(requestRemoveProductFromCart());
    try {
        await shopService.reduceProductCount(productId);
        return await dispatch(productRemovedFromCart(productId));
    }
    catch (error) {
        return await dispatch(removeProductFromCartError(error));
    }
};

export const removeAllProducts = (shopService, productId) => async (dispatch) => {
    await dispatch(requestRemoveAllProductsFromCart());
    try {
        await shopService.removeFromCart(productId);
        return await dispatch(allProductsRemovedFromCart(productId));
    }
    catch (error) {
        return await dispatch(removeAllProductsFromCartError(error));
    }
};