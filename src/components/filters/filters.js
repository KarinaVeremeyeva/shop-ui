import React from "react";
import { Checkbox, FormGroup, FormControlLabel, TextField, Slider, Grid, Typography } from "@mui/material";

const BasicCheckbox = ({ values, name }) => {
    return (
        <FormGroup row>
            <Typography variant="subtitle1">{name}</Typography>
            <Checkbox checked={values} onChange={(e) => console.log(e.target.value)} />
        </FormGroup>
    );
};

const CheckboxList = ({ values, name }) => {
    return (
        <FormGroup>
            <Typography variant="subtitle1">{name}</Typography>
            {
                values.map((value) => {
                    return (
                        <FormControlLabel control={<Checkbox />} label={value} />
                    );
                })
            }
        </FormGroup>
    );
};

const RangeSlider = ({ values, name }) => {
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    
    const [value, setValue] = React.useState([minValue, maxValue]);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleMinValueChange = (event) => {
        const minValue = event.target.value || 0;
        setValue([minValue, value[1]]);
    };

    const handleMaxValueChange = (event) => {
        const maxValue = event.target.value || 0;
        setValue([maxValue, value[0]])   
    };

    return (
        <Grid container direction="row"  >
            <Typography variant="subtitle1">{name}</Typography>
            <Grid container item justifyContent="space-between">
                <TextField
                    value={value[0]}
                    id="outlined-basic-min"
                    type="number"
                    label="Min"
                    defaultValue={minValue}
                    variant="outlined"
                    size="small"
                    style = {{width: 80}}
                    onChange={handleMinValueChange}
                />
                <TextField 
                    id="outlined-basic-max"
                    type="number"
                    label="Max"
                    value={value[1]}
                    defaultValue={maxValue}
                    variant="outlined"
                    size="small"
                    style = {{width: 80}}
                    onChange={handleMaxValueChange}
                />
            </Grid>
            <Slider
                value={value}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
            />
        </Grid>
    );
};

export {
    BasicCheckbox,
    CheckboxList,
    RangeSlider
}