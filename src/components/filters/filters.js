import React, { useState } from "react";

import { StringFilter, NumberFilter, BooleanFilter } from ".";
import classes from './filters.module.css';

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

const makeFilters = (handleStringFilterChange, handleNumberFilterChange, handleBooleanFilterChange) => (type, id, values, name, selectedFilters) => {
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

const Filters = ({ filters, products }) => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const priceFilter = {
        id: 'price',
        name: 'Price',
        type: 1,
        values: products.map(p => p.price)
    };
    const filtersExtended = [priceFilter, ...filters];

    const handleStringFilterChange = (id, checkedValue) => {
        let filterToChange = selectedFilters[id] || [];
        if (filterToChange.includes(checkedValue)) {
            filterToChange = filterToChange.filter(value => value !== checkedValue);
        }
        else {
            filterToChange = [...filterToChange, checkedValue];
        }

        setSelectedFilters({
            ...selectedFilters,
            [id]: filterToChange
        });
    };

    const handleNumberFilterChange = (id, values) => {
        setSelectedFilters({
            ...selectedFilters,
            [id]: values
        });
    };

    const handleBooleanFilterChange = (id, checked) => {
        setSelectedFilters({
            ...selectedFilters,
            [id]: [checked]
        });
    };

    const filterMaker = makeFilters(handleStringFilterChange, handleNumberFilterChange, handleBooleanFilterChange);

    return (
        <div className={classes.filterContainer}>
            { filtersExtended.map(({ id, name, type, values }) => filterMaker(type, id, values, name, selectedFilters)) }
        </div>
    );
};

export default Filters;