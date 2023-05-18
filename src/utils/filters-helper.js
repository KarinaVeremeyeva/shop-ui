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

    const selectedFilters = allSelectedFilters.reduce((accumulator, currentValue) => {
        const { value, ...restProps } = currentValue;

        const index = accumulator.findIndex(item => item.id === restProps.id);
        if (index !== -1) {
            if (!accumulator[index].values.includes(value)) {
                accumulator[index].values.push(value);
            }
        }
        else {
            accumulator.push({
                ...restProps,
                values: [value]});
        }
        
        return accumulator;
    }, []);

    return selectedFilters;
};

export default makeFilters;