import * as actionType from './actionTypes';

export const detailsRequested = () => {
    return {
        type: actionType.DETAILS_REQUESTED,
    };
};

export const detailsLoaded = (details) => {
    return {
        type: actionType.DETAILS_LOADED,
        payload: details
    };
};

export const detailsError = (error) => {
    return {
        type: actionType.DETAILS_FAILURE,
        payload: error
    };
};

export const addDetailRequested = () => {
    return {
        type: actionType.ADD_DETAIL_REQUESTED
    };
};

export const detailAdded = (detail) => {
    return {
        type: actionType.ADD_DETAIL_SUCCESS,
        payload: detail
    };
};

export const addDetailError = (error) => {
    return {
        type: actionType.ADD_DETAIL_FAILURE,
        payload: error
    };
};

export const updateDetailRequested = () => {
    return {
        type: actionType.UPDATE_DETAIL_REQUESTED,
    };
};

export const detailUpdated = (detail) => {
    return {
        type: actionType.UPDATE_DETAIL_SUCCESS,
        payload: detail
    };
};

export const updateDetailError = (error) => {
    return {
        type: actionType.UPDATE_DETAIL_FAILURE,
        payload: error
    };
};

export const removeDetailRequested = () => {
    return {
        type: actionType.REMOVE_DETAIL_REQUESTED,
    };
};

export const detailRemoved = (detailId) => {
    return {
        type: actionType.REMOVE_DETAIL_SUCCESS,
        payload: detailId
    };
};

export const removeDetailError = (error) => {
    return {
        type: actionType.REMOVE_DETAIL_FAILURE,
        payload: error
    };
};

export const categoriesListRequested = () => {
    return {
        type: actionType.CATEGORIES_LIST_REQUESTED
    };
};

export const categoriesListLoaded = (categoriesList) => {
    return {
        type: actionType.CATEGORIES_LIST_SUCCESS,
        payload: categoriesList
    };
};

export const categoriesListError = (error) => {
    return {
        type: actionType.CATEGORIES_LIST_FAILURE,
        payload: error
    };
};

export const addCategoryRequested = () => {
    return {
        type: actionType.ADD_CATEGORY_REQUESTED
    };
};

export const categoryAdded = (category) => {
    return {
        type: actionType.ADD_CATEGORY_SUCCESS,
        payload: category
    };
};

export const addCategoryError = (error) => {
    return {
        type: actionType.ADD_CATEGORY_FAILURE,
        payload: error
    };
};

export const updateCategoryRequested = () => {
    return {
        type: actionType.UPDATE_CATEGORY_REQUESTED,
    };
};

export const categoryUpdated = (category) => {
    return {
        type: actionType.UPDATE_CATEGORY_SUCCESS,
        payload: category
    };
};

export const updateCategoryError = (error) => {
    return {
        type: actionType.UPDATE_CATEGORY_FAILURE,
        payload: error
    };
};

export const removeCategoryRequested = () => {
    return {
        type: actionType.REMOVE_CATEGORY_REQUESTED,
    };
};

export const categoryRemoved = (categoryId) => {
    return {
        type: actionType.REMOVE_CATEGORY_SUCCESS,
        payload: categoryId
    };
};

export const removeCategoryError = (error) => {
    return {
        type: actionType.REMOVE_CATEGORY_FAILURE,
        payload: error
    };
};

export const productsListRequested = () => {
    return {
        type: actionType.PRODUCTS_LIST_REQUESTED
    };
};

export const productsListLoaded = (productsList) => {
    return {
        type: actionType.PRODUCTS_LIST_SUCCESS,
        payload: productsList
    };
};

export const productsListError = (error) => {
    return {
        type: actionType.PRODUCTS_LIST_FAILURE,
        payload: error
    };
};

export const addProductRequested = () => {
    return {
        type: actionType.ADD_PRODUCT_REQUESTED
    };
};

export const productAdded = (product) => {
    return {
        type: actionType.ADD_PRODUCT_SUCCESS,
        payload: product
    };
};

export const addProductError = (error) => {
    return {
        type: actionType.ADD_PRODUCT_FAILURE,
        payload: error
    };
};

export const updateProductRequested = () => {
    return {
        type: actionType.UPDATE_PRODUCT_REQUESTED
    };
};

export const productUpdated = (product) => {
    return {
        type: actionType.UPDATE_PRODUCT_SUCCESS,
        payload: product
    };
};

export const updateProductError = (error) => {
    return {
        type: actionType.UPDATE_PRODUCT_FAILURE,
        payload: error
    };
};

export const removeProductRequested = () => {
    return {
        type: actionType.REMOVE_PRODUCT_REQUESTED,
    };
};

export const productRemoved = (productId) => {
    return {
        type: actionType.REMOVE_PRODUCT_SUCCESS,
        payload: productId
    };
};

export const removeProductError = (error) => {
    return {
        type: actionType.REMOVE_PRODUCT_FAILURE,
        payload: error
    };
};