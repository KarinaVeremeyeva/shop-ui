import React from "react";
import { Checkbox, FormGroup, FormControlLabel, Typography } from "@mui/material";

const StringFilter = ({ values, name, onChange, selectedValues, id }) => {
    return (
        <FormGroup>
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
                                />
                            }
                            label={value}
                        />
                    );
                })
            }
        </FormGroup>
    );
};

export default StringFilter;