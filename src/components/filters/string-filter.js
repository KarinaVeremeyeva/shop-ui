import React from "react";
import { Checkbox, FormGroup, FormControlLabel, Typography } from "@mui/material";
import classes from './filters.module.css';

const StringFilter = ({ values, name, onChange, selectedValues, id }) => {
    return (
        <FormGroup classes={{ root: classes.formGroup }}>
            <Typography variant="subtitle1">{name}</Typography>
            {
                values.map((value) => {
                    return (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={selectedValues.includes(value)}
                                    onChange={(e) => onChange(id, e.target.value)}
                                    value={value}
                                    classes={{ root: classes.checkbox }}
                                />
                            }
                            label={value}
                            key={`${id}-${value}`}
                        />
                    );
                })
            }
        </FormGroup>
    );
};

export default StringFilter;