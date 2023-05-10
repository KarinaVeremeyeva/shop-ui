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

export { productsLoaded, categoriesLoaded };