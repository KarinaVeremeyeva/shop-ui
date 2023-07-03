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

export const fetchDetails = shopService => async dispatch => {
    await dispatch(detailsRequested());
    try {
        const details = await shopService.getDetails();
        return await dispatch(detailsLoaded(details));   
    }
    catch (error) {
        return await dispatch(detailsError(error));        
    }
};

export const addDetail = (shopService, detail) => async dispatch => {
    await dispatch(addDetailRequested());
    try {
        const result = await shopService.addDetail(detail);
        return await dispatch(detailAdded(result));   
    }
    catch (error) {
        return await dispatch(addDetailError(error));        
    }
};

export const updateDetail = (shopService, detail) => async dispatch => {
    await dispatch(updateDetailRequested());
    try {
        const result = await shopService.updateDetail(detail);
        return await dispatch(detailUpdated(result));   
    }
    catch (error) {
        return await dispatch(updateDetailError(error));        
    }
};

export const deleteDetail = (shopService, detailId) => async dispatch => {
    await dispatch(removeDetailRequested());
    try {
        await shopService.deleteDetail(detailId);
        return await dispatch(detailRemoved(detailId));   
    }
    catch (error) {
        return await dispatch(removeDetailError(error));        
    }
};

export const fetchCategoriesList = shopService => async dispatch => {
    await dispatch(categoriesListRequested());
    try {
        const categories = await shopService.getCategoriesList();
        return await dispatch(categoriesListLoaded(categories));   
    }
    catch (error) {
        return await dispatch(categoriesListError(error));        
    }
};

export const addCategory = (shopService, category) => async dispatch => {
    await dispatch(addCategoryRequested());
    try {
        const result = await shopService.addCategory(category);
        return await dispatch(categoryAdded(result));   
    }
    catch (error) {
        return await dispatch(addCategoryError(error));        
    }
};

export const updateCategory = (shopService, category) => async dispatch => {
    await dispatch(updateCategoryRequested());
    try {
        const result = await shopService.updateCategory(category);
        return await dispatch(categoryUpdated(result));   
    }
    catch (error) {
        return await dispatch(updateCategoryError(error));        
    }
};

export const deleteCategory = (shopService, categoryId) => async dispatch => {
    await dispatch(removeCategoryRequested());
    try {
        await shopService.deleteCategory(categoryId);
        return await dispatch(categoryRemoved(categoryId));   
    }
    catch (error) {
        return await dispatch(removeCategoryError(error));        
    }
};

export const fetchProductsList = shopService => async dispatch => {
    await dispatch(productsListRequested());
    try {
        const products = await shopService.getProductsList();
        return await dispatch(productsListLoaded(products));   
    }
    catch (error) {
        return await dispatch(productsListError(error));        
    }
};

export const addProduct = (shopService, product) => async dispatch => {
    await dispatch(addProductRequested());
    try {
        const result = await shopService.addProduct(product);
        return await dispatch(productAdded(result));   
    }
    catch (error) {
        return await dispatch(addProductError(error));        
    }
};

export const updateProduct = (shopService, product) => async dispatch => {
    await dispatch(updateProductRequested());
    try {
        const result = await shopService.updateProduct(product);
        return await dispatch(productUpdated(result));   
    }
    catch (error) {
        return await dispatch(updateProductError(error));        
    }
};

export const deleteProduct = (shopService, productId) => async dispatch => {
    await dispatch(removeProductRequested());
    try {
        await shopService.deleteProduct(productId);
        return await dispatch(productRemoved(productId));   
    }
    catch (error) {
        return await dispatch(removeProductError(error));        
    }
};