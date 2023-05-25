import React, { useState } from "react";

import { StringFilter, NumberFilter, BooleanFilter } from "../filters";
import classes from './details.module.css';

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

const Details = ({ filters, products }) => {
    const [selectedFilters, setSelectedFilters] = useState({});
    if (products.length <= 1) {
        return null;
    }

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

    return (
        <div className={classes.filterContainer}>
            {
                filtersExtended.map((filter) => {
                    const { id, name, type, values } = filter;                        
                    switch (type) {
                        case filterTypes.STRING:
                            return (
                                <StringFilter
                                    key={id}
                                    id={id}
                                    values={values}
                                    name={name}
                                    onChange={handleStringFilterChange}
                                    selectedValues={checkSelectedFilters(type, id, selectedFilters)}
                                />
                            );
                        case filterTypes.NUMBER:
                            return (
                                <NumberFilter
                                    key={id}
                                    id={id}
                                    values={values}
                                    name={name}
                                    onChange={handleNumberFilterChange}
                                    selectedValues={checkSelectedFilters(type, id, selectedFilters)}
                                />
                            );
                        case filterTypes.BOOLEAN:
                            return (
                                <BooleanFilter
                                    key={id}
                                    id={id}
                                    name={name}
                                    onChange={handleBooleanFilterChange}
                                    checked={checkSelectedFilters(type, id, selectedFilters)}
                                />
                            );
                        default:
                            return null;
                    }
                })
            }
        </div>
    );
};

export default Details;