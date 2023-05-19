import React from "react";
import { Slider, Grid, Typography, TextField } from "@mui/material";
import classes from './filters.module.css';

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
        <Grid container classes={{ root: classes.wrapGrid}}>
            <Typography variant="subtitle1" className={classes.titleWrap}>
                {name}
            </Typography>
            <Grid container item justifyContent="space-between">
                <TextField
                    value={minValue}
                    id="outlined-basic-min"
                    type="number"
                    label="Min"
                    variant="outlined"
                    size="small"
                    classes={{ root: classes.textField }}
                    onChange={handleMinValueChange}
                />
                <TextField
                    value={maxValue}
                    id="outlined-basic-max"
                    type="number"
                    label="Max"
                    variant="outlined"
                    size="small"
                    classes={{ root: classes.textField }}
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