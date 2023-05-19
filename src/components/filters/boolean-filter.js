import React from "react";
import { Checkbox, FormGroup, Typography } from "@mui/material";
import classes from './filters.module.css';

const BooleanFilter = ({ checked, name, onChange, id }) => {
    return (
        <FormGroup row className={classes.wrapCheckbox}>
            <Typography variant="subtitle1">{name}</Typography>
            <Checkbox
                classes={{ root: classes.checkBoxAlign }}
                checked={checked}
                onChange={(e) => onChange(id, e.target.checked)}
            />
        </FormGroup>
    );
};

export default BooleanFilter;