import React from "react";
import { Checkbox, TextField } from "@mui/material";
import { detailTypes } from "./detailTypes";

const DetailValue = ({ type, value, onChange }) => {
    switch(type) {
        case detailTypes.STRING:
            return (
                <TextField
                    margin="dense"
                    type="text"
                    value={value}
                    onChange={(e) => onChange(`${e.target.value}`)}
                />
            );
        case detailTypes.NUMBER:
            return (
                <TextField
                    margin="dense"
                    type="number"
                    value={value}
                    onChange={(e) => onChange(`${e.target.value}`)}
                />
            );
        case detailTypes.BOOLEAN:
            const booleanValue = value.toLowerCase() === 'true';
            return (
                <Checkbox
                    checked={booleanValue}
                    onChange={(e) => onChange(`${e.target.checked}`)}
                />
            );
        default:
            return null;
    };
};

export default DetailValue;