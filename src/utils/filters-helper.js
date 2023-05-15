const makeFilters = (products) => {
    const details = products.map(p => p.details).flat();
    const detailsIds = details.map(d => d.id);
    const detailsInAllProducts = detailsIds.filter(detailId => products.every(p => p.details.find(d => d.id === detailId)));
    
    const uniqueIds = detailsInAllProducts.reduce((accumulator, currentValue) => {
        if (!accumulator.includes(currentValue)) {
            return [...accumulator, currentValue];
        }
        
        return accumulator;
    }, []);

    const selectedFilters = details.filter(detail => uniqueIds.includes(detail.id));
    console.log(selectedFilters);

    return selectedFilters;
};

const printAllDetails = (products) => {
    const details = products.map(p => p.details).flat();
    return details;
};

const removeArrayDublicates = (items) => {
    const uniqueArray = items.reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []);

    return uniqueArray;
};

export {
    makeFilters, printAllDetails, removeArrayDublicates
};