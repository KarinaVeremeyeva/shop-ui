import React, { useState, useEffect, useCallback } from "react";

import { StringFilter, NumberFilter, BooleanFilter } from ".";
import classes from './filters.module.css';
import { Button } from "@mui/material";

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

const debounce = (func, timeout = 300) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout)
    };
};

const Filters = ({ filters, onFiltersUpdated }) => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const debounceOnFiltersUpdated = useCallback((onFiltersUpdated) => debounce(onFiltersUpdated, 1000), [debounce]); 
    const debounceCallback = debounceOnFiltersUpdated(onFiltersUpdated);
    const debounceFunction = useCallback((selectedFilters) => debounceCallback(selectedFilters), [debounceCallback]);
    
    useEffect(() => {
        debounceFunction(selectedFilters);
    }, [selectedFilters, debounceFunction]);

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

    const handleOnClick = () => {
        onFiltersUpdated(selectedFilters);
    };

    const filterMaker = makeFilters(handleStringFilterChange, handleNumberFilterChange, handleBooleanFilterChange);

    return (
        <div className={classes.filterContainer}>
            { filters.map(({ detailId, name, type, values }) => filterMaker(type, detailId, values, name, selectedFilters)) }
            {filters.length > 0 && (<Button onClick={handleOnClick} className={classes.btnWrapper} variant="outlined">Apply filters</Button>)}
        </div>
    );
};

export default Filters;