const productsLoaded = (products) => {
    return {
        type: 'PRODUCTS_LOADED',
        payload: products
    };
};

export { productsLoaded };