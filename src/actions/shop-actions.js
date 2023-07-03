import * as actionType from './actionTypes';

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

export const fetchProducts = (shopService, categoryId, params, selectedFilters = {}) =>
    async dispatch => {
        await dispatch(productsRequested());
        try {
            const products = await shopService.getProducts(categoryId, params, selectedFilters);
            return await dispatch(productsLoaded(products));
        }
        catch (error) {
            return await dispatch(productsError(error));
        }
    };

export const fetchCategories = shopService => async dispatch => {
    await dispatch(categoriesRequested());
    try {
        const categories = await shopService.getCategories();
        return await dispatch(categoriesLoaded(categories));
    }
    catch (error) {
        return await dispatch(categoriesError(error));
    }
};