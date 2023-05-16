import React, { Fragment } from "react";

import { BasicCheckbox, CheckboxList, RangeSlider } from "../filters";

const filterTypes = {
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean'
};

const renderFilter = (filter) => {
    const { id, name, type, value } = filter;
    
    switch (type) {
        case filterTypes.STRING:
            return <CheckboxList key={`filter_${id}_${value}`} values={value} name={name} />;
        case filterTypes.NUMBER:
            return <RangeSlider key={`filter_${id}_${value}`} values={value} name={name} />;
        case filterTypes.BOOLEAN:
            return <BasicCheckbox value={value} name={name} />
        default:
            return null;
    }
};

const Details = ({ filters }) => {
    return (
        <Fragment>
            <span>Selected filters:</span>
            <div>
                {
                    filters.map((filter) => {
                        return (
                            renderFilter(filter)
                        );
                    })
                }
            </div>
        </Fragment>
    );
};

export default Details;