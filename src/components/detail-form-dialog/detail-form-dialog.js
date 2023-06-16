import React, { useState } from "react";
import { Button, Dialog, DialogContent, DialogActions, DialogTitle, MenuItem, Select, TextField } from "@mui/material";

const DetailFormDialog = ({ open, types, handleClose, handleSubmit, detail }) => {
    const [type, setType] = useState(detail?.type);
    const [name, setName] = useState(detail?.name);

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    
    const formTitle = typeof detail === 'undefined' ? 'Add detail' : 'Edit detail';

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{formTitle}</DialogTitle>
            <DialogContent>
                <TextField value={name} onChange={(e) => setName(e.target.value)}/>
                <Select value={type} onChange={handleTypeChange}>
                    { types.map(type => <MenuItem key={type.value} value={type.value}>{type.name}</MenuItem>)}
                </Select>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained">Submit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DetailFormDialog;