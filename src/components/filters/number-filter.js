import React from "react";
import { Slider, Grid, Typography, TextField } from "@mui/material";

const NumberFilter = ({ values, name, onChange, selectedValues, id }) => {
    const valuesToShow = selectedValues.length < 2 ? values : selectedValues;

    const minValue = Math.min(...valuesToShow);
    const maxValue = Math.max(...valuesToShow);

    const handleMinValueChange = (event) => {
        const minValue = event.target.value || 0;
        onChange(id, [minValue, maxValue]);
    };

    const handleMaxValueChange = (event) => {
        const maxValue = event.target.value || 0;
        onChange(id, [maxValue, minValue]);   
    };
        
    return (
        <Grid container direction="row">
            <Typography variant="subtitle1">{name}</Typography>
            <Grid container item justifyContent="space-between">
                <TextField
                    value={minValue}
                    id="outlined-basic-min"
                    type="number"
                    label="Min"
                    variant="outlined"
                    size="small"
                    style = {{width: 80}}
                    onChange={handleMinValueChange}
                />
                <TextField 
                    id="outlined-basic-max"
                    type="number"
                    label="Max"
                    value={maxValue}
                    variant="outlined"
                    size="small"
                    style = {{width: 80}}
                    onChange={handleMaxValueChange}
                />
            </Grid>
            <Slider
                value={[minValue, maxValue]}
                onChange={(_, newValue) => onChange(id, newValue)}
                valueLabelDisplay="auto"
            />
        </Grid>
    );
};

export default NumberFilter;