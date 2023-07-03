import React, { useState } from "react";
import { Button } from "@mui/material";
import { makeFilters } from "./helpers";
import classes from './filters.module.css';

const Filters = ({ filters, onFiltersUpdated }) => {
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

    const handleOnClick = () => {
        onFiltersUpdated(selectedFilters);
    };

    const filterMaker = makeFilters(handleStringFilterChange, handleNumberFilterChange, handleBooleanFilterChange);

    return (
        <div className={classes.filterContainer}>
            {filters.length > 0 && (
                <Button
                    onClick={handleOnClick}
                    className={classes.btnWrapper}
                    variant="outlined"
                >
                    Apply filters
                </Button>
            )}
            { filters.map(({ detailId, name, type, values }) => filterMaker(type, detailId, values, name, selectedFilters)) }
        </div>
    );
};

export default Filters;