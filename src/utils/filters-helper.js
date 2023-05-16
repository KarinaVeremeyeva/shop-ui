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

    const allSelectedFilters = details.filter(detail => uniqueIds.includes(detail.id));
    console.log(allSelectedFilters);

    const selectedFilters = allSelectedFilters.reduce((accumulator, currentValue) => {
        const index = accumulator.findIndex(item => item.id === currentValue.id);
        if (index !== -1) {
            if (!accumulator[index].value.includes(currentValue.value)) {
                accumulator[index].value.push(currentValue.value);
            }
        }
        else {
            accumulator.push({
                ...currentValue,
                value: [currentValue.value]});
        }
        
        return accumulator;
    }, []);

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