import React from "react";
import { Checkbox, FormGroup, Typography } from "@mui/material";

const BooleanFilter = ({ checked, name, onChange, id }) => {
    return (
        <FormGroup row>
            <Typography variant="subtitle1">{name}</Typography>
            <Checkbox
                sx={{ padding: 0, marginLeft:'0.6rem'}}
                checked={checked}
                onChange={(e) => onChange(id, e.target.checked)}
            />
        </FormGroup>
    );
};

export default BooleanFilter;