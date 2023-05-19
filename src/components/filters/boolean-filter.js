import React from "react";
import { Checkbox, FormGroup, Typography } from "@mui/material";
import classes from './filters.module.css';

const BooleanFilter = ({ checked, name, onChange, id }) => {
    return (
        <FormGroup row className={classes.checkboxWrapper}>
            <Typography variant="subtitle1">{name}</Typography>
            <Checkbox
                checked={checked}
                onChange={(e) => onChange(id, e.target.checked)}
            />
        </FormGroup>
    );
};

export default BooleanFilter;