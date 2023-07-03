import * as actionType from './actionTypes';

export const productsRequested = () => {
    return {
        type: actionType.PRODUCTS_REQUESTED,
    };
};

export const productsLoaded = (products) => {
    return {
        type: actionType.PRODUCTS_LOADED,
        payload: products
    };
};

export const productsError = (error) => {
    return {
        type: actionType.PRODUCTS_FAILURE,
        payload: error
    };
};

export const categoriesRequested = () => {
    return {
        type: actionType.CATEGORIES_REQUESTED,
    };
};

export const categoriesLoaded = (categories) => {
    return {
        type: actionType.CATEGORIES_LOADED,
        payload: categories
    };
};

export const categoriesError = (error) => {
    return {
        type: actionType.CATEGORIES_FAILURE,
        payload: error
    };
};