import React, { Fragment } from "react";

const filterTypes = {
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean'
};

const Details = ({ filters }) => {
    return (
        <Fragment>
            <span>Selected filters:</span>
            <div>
                {
                    filters.map((filter) => {
                        const { id, name, type, value } = filter;
                        if (type ===  filterTypes.STRING) {
                            return <div>String filter</div>;
                        }
                        else if (type ===  filterTypes.NUMBER) {
                            return <div>Number filter</div>
                        }
                        else if (type ===  filterTypes.BOOLEAN) {
                            return <div>Boolean filter</div>
                        }

                        return (
                            <div key={`filter_${id}`}>
                                <div>Name: {name}; type: {type};</div>
                                {
                                    value.map(val => <div key={`filter_${id}_${val}`}>value: {`${val}`}</div>)
                                }
                            </div>
                        );
                    })
                }
            </div>
        </Fragment>
    );
};

export default Details;