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

const userDataRequested = () => {
    return {
        type: actionType.USER_DATA_REQUESTED,
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

const detailsRequested = () => {
    return {
        type: actionType.DETAILS_REQUESTED,
    };
};

const detailsLoaded = (details) => {
    return {
        type: actionType.DETAILS_LOADED,
        payload: details
    };
};

const detailsError = (error) => {
    return {
        type: actionType.DETAILS_FAILURE,
        payload: error
    };
};

const addDetailRequested = () => {
    return {
        type: actionType.ADD_DETAIL_REQUESTED
    };
};

const detailAdded = (detail) => {
    return {
        type: actionType.ADD_DETAIL_SUCCESS,
        payload: detail
    };
};

const addDetailError = (error) => {
    return {
        type: actionType.ADD_DETAIL_FAILURE,
        payload: error
    };
};

const updateDetailRequested = () => {
    return {
        type: actionType.UPDATE_DETAIL_REQUESTED,
    };
};

const detailUpdated = (detail) => {
    return {
        type: actionType.UPDATE_DETAIL_SUCCESS,
        payload: detail
    };
};

const updateDetailError = (error) => {
    return {
        type: actionType.UPDATE_DETAIL_FAILURE,
        payload: error
    };
};

const removeDetailRequested = () => {
    return {
        type: actionType.REMOVE_DETAIL_REQUESTED,
    };
};

const detailRemoved = (detailId) => {
    return {
        type: actionType.REMOVE_DETAIL_SUCCESS,
        payload: detailId
    };
};

const removeDetailError = (error) => {
    return {
        type: actionType.REMOVE_DETAIL_FAILURE,
        payload: error
    };
};

const categoriesListRequested = () => {
    return {
        type: actionType.CATEGORIES_LIST_REQUESTED
    };
};

const categoriesListLoaded = (categoriesList) => {
    return {
        type: actionType.CATEGORIES_LIST_SUCCESS,
        payload: categoriesList
    };
};

const categoriesListError = (error) => {
    return {
        type: actionType.CATEGORIES_LIST_FAILURE,
        payload: error
    };
};

const addCategoryRequested = () => {
    return {
        type: actionType.ADD_CATEGORY_REQUESTED
    };
};

const categoryAdded = (category) => {
    return {
        type: actionType.ADD_CATEGORY_SUCCESS,
        payload: category
    };
};

const addCategoryError = (error) => {
    return {
        type: actionType.ADD_CATEGORY_FAILURE,
        payload: error
    };
};

const updateCategoryRequested = () => {
    return {
        type: actionType.UPDATE_CATEGORY_REQUESTED,
    };
};

const categoryUpdated = (category) => {
    return {
        type: actionType.UPDATE_CATEGORY_SUCCESS,
        payload: category
    };
};

const updateCategoryError = (error) => {
    return {
        type: actionType.UPDATE_CATEGORY_FAILURE,
        payload: error
    };
};

const removeCategoryRequested = () => {
    return {
        type: actionType.REMOVE_CATEGORY_REQUESTED,
    };
};

const categoryRemoved = (categoryId) => {
    return {
        type: actionType.REMOVE_CATEGORY_SUCCESS,
        payload: categoryId
    };
};

const removeCategoryError = (error) => {
    return {
        type: actionType.REMOVE_CATEGORY_FAILURE,
        payload: error
    };
};

const productsListRequested = () => {
    return {
        type: actionType.PRODUCTS_LIST_REQUESTED
    };
};

const productsListLoaded = (productsList) => {
    return {
        type: actionType.PRODUCTS_LIST_SUCCESS,
        payload: productsList
    };
};

const productsListError = (error) => {
    return {
        type: actionType.PRODUCTS_LIST_FAILURE,
        payload: error
    };
};

const addProductRequested = () => {
    return {
        type: actionType.ADD_PRODUCT_REQUESTED
    };
};

const productAdded = (product) => {
    return {
        type: actionType.ADD_PRODUCT_SUCCESS,
        payload: product
    };
};

const addProductError = (error) => {
    return {
        type: actionType.ADD_PRODUCT_FAILURE,
        payload: error
    };
};

const updateProductRequested = () => {
    return {
        type: actionType.UPDATE_PRODUCT_REQUESTED
    };
};

const productUpdated = (product) => {
    return {
        type: actionType.UPDATE_PRODUCT_SUCCESS,
        payload: product
    };
};

const updateProductError = (error) => {
    return {
        type: actionType.UPDATE_PRODUCT_FAILURE,
        payload: error
    };
};

const removeProductRequested = () => {
    return {
        type: actionType.REMOVE_PRODUCT_REQUESTED,
    };
};

const productRemoved = (productId) => {
    return {
        type: actionType.REMOVE_PRODUCT_SUCCESS,
        payload: productId
    };
};

const removeProductError = (error) => {
    return {
        type: actionType.REMOVE_PRODUCT_FAILURE,
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
    userDataRequested,
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
    removeAllProductsFromCartError,
    detailsRequested,
    detailsLoaded,
    detailsError,
    addDetailRequested,
    detailAdded,
    addDetailError,
    updateDetailRequested,
    detailUpdated,
    updateDetailError,
    removeDetailRequested,
    detailRemoved,
    removeDetailError,
    categoriesListRequested,
    categoriesListLoaded,
    categoriesListError,
    addCategoryRequested,
    categoryAdded,
    addCategoryError,
    updateCategoryRequested,
    categoryUpdated,
    updateCategoryError,
    removeCategoryRequested,
    categoryRemoved,
    removeCategoryError,
    productsListRequested,
    productsListLoaded,
    productsListError,
    addProductRequested,
    productAdded,
    addProductError,
    updateProductRequested,
    productUpdated,
    updateProductError,
    removeProductRequested,
    productRemoved,
    removeProductError
};