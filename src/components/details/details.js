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
    const defailtSelectedFilters = filters.reduce(
        (defaultFilters, filter) => defaultFilters[filter.id] = [],
        {});

    const [selectedFilters, setSelectedFilters] = useState(defailtSelectedFilters);

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
                        const {id, name, type, value } = filter;                        
                        switch (type) {
                            case filterTypes.STRING:
                                return (
                                    <StringFilter
                                        key={`filter_${id}_${value}`}
                                        id={id}
                                        values={value}
                                        name={name}
                                        onChange={handleStringFilterChange}
                                        selectedValues={checkSelectedFilters(type, id, selectedFilters)}
                                    />);
                            case filterTypes.NUMBER:
                                return (
                                    <NumberFilter
                                        key={`filter_${id}_${value}`}
                                        id={id}
                                        values={value}
                                        name={name}
                                        onChange={handleNumberFilterChange}
                                        selectedValues={selectedFilters[id] || []}
                                    />);
                            case filterTypes.BOOLEAN:
                                return (
                                    <BooleanFilter
                                        key={`filter_${id}_${value}`}
                                        id={id}
                                        name={name}
                                        onChange={handleBooleanFilterChange}
                                        checked={selectedFilters[id] ? selectedFilters[id][0] || false : false}
                                    />);
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