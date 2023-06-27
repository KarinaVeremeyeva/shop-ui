import { StringFilter, NumberFilter, BooleanFilter } from ".";

const filterTypes = {
    STRING: 0,
    NUMBER: 1,
    BOOLEAN: 2
};

const checkSelectedFilters = (type, id, selectedFilters) => {
    switch (type) {
        case filterTypes.STRING:
            return selectedFilters[id] || [];
        case filterTypes.NUMBER:
            return selectedFilters[id] || [];
        case filterTypes.BOOLEAN:
            return selectedFilters[id] ? selectedFilters[id][0] || false : false;
        default:
            return null; 
    }
};

export const makeFilters = (handleStringFilterChange, handleNumberFilterChange, handleBooleanFilterChange) => (type, id, values, name, selectedFilters) => {
    let FilterComponent = null;
    let onChange = null;
    switch (type) {
        case filterTypes.STRING:
            FilterComponent = StringFilter;
            onChange = handleStringFilterChange;
            break;
        case filterTypes.NUMBER:
            FilterComponent = NumberFilter;
            onChange = handleNumberFilterChange;
            break;
        case filterTypes.BOOLEAN:
            FilterComponent = BooleanFilter;
            onChange = handleBooleanFilterChange;
            break;
        default:
            break;
    };
    return (
        <FilterComponent
            key={id}
            id={id}
            values={values}
            name={name}
            onChange={onChange}
            selectedValues={checkSelectedFilters(type, id, selectedFilters)}
        />
    );
};