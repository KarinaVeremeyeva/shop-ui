const productsLoaded = (products) => {
    return {
        type: 'PRODUCTS_LOADED',
        payload: products
    };
};

const categoriesLoaded = (categories) => {
    return {
        type: 'CATEGORIES_LOADED',
        payload: categories
    };
};


export { productsLoaded, categoriesLoaded };