import React, { Fragment, useState } from "react";

import { StringFilter, NumberFilter, BooleanFilter } from "../filters";

const filterTypes = {
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean'
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

const Details = ({ filters }) => {
    const [selectedFilters, setSelectedFilters] = useState({});

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
        <Fragment>
            <span>Selected filters:</span>
            <div>
                {
                    filters.map((filter) => {
                        const { id, name, type, values } = filter;                        
                        switch (type) {
                            case filterTypes.STRING:
                                return (
                                    <StringFilter
                                        key={`filter_${id}_${values}`}
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
                                        key={`filter_${id}_${values}`}
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
                                        key={`filter_${id}_${values}`}
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
        </Fragment>
    );
};

export default Details;