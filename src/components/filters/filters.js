import React from "react";
import { Checkbox, FormGroup, FormControlLabel, TextField, Slider, Grid, Typography } from "@mui/material";

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

const StringFilter = ({ values, name, onChange, selectedValues, id }) => {
    return (
        <FormGroup>
            <Typography variant="subtitle1">{name}</Typography>
            {
                values.map((value) => {
                    return (
                        <FormControlLabel
                            control={
                                <Checkbox checked={selectedValues.includes(value)} onChange={(e) => onChange(id, e.target.value)} value={value}/>
                            }
                            label={value}
                        />
                    );
                })
            }
        </FormGroup>
    );
};

const NumberFilter = ({ values, name, onChange, selectedValues, id }) => {
    const valuesToShow = selectedValues.length < 2 ? values : selectedValues;
    const sorderValues = valuesToShow.sort();

    const minValue = Math.min(...sorderValues);
    const maxValue = Math.max(...sorderValues);

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

export {
    BooleanFilter,
    StringFilter,
    NumberFilter
};