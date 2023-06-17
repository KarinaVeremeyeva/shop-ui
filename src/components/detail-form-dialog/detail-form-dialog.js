import React, { useState } from "react";
import { Button, Dialog, DialogContent, DialogActions, DialogTitle, MenuItem, Select, TextField } from "@mui/material";

const DetailFormDialog = ({ detail, types, open, handleClose, handleSubmit }) => {
    const [type, setType] = useState(detail?.type || 0);
    const [name, setName] = useState(detail?.name || '');

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    
    const dialogTitle = typeof detail === 'undefined' ? 'Add detail' : 'Edit detail';

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogContent>
                <TextField value={name} onChange={(e) => setName(e.target.value)}/>
                <Select value={type} onChange={handleTypeChange}>
                    { types.map(type => <MenuItem key={type.value} value={type.value}>{type.name}</MenuItem>)}
                </Select>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="outlined">Cancel</Button>
                <Button
                    onClick={() => handleSubmit({ id: detail?.id, name, type })}
                    variant="contained">
                        Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DetailFormDialog;