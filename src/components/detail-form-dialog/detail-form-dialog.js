import React, { useState } from "react";
import { Button, Dialog, DialogContent, DialogActions, DialogTitle, MenuItem, Select, TextField } from "@mui/material";

const DetailFormDialog = ({ detail, types, open, onClose, onSubmit }) => {
    const [type, setType] = useState(detail?.type || 0);
    const [name, setName] = useState(detail?.name || '');

    const dialogTitle = typeof detail === 'undefined' ? 'Add detail' : 'Edit detail';

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogContent>
                <TextField value={name} onChange={(e) => setName(e.target.value)}/>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    { types.map(type => <MenuItem key={type.value} value={type.value}>{type.name}</MenuItem>)}
                </Select>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined">Cancel</Button>
                <Button
                    onClick={() => onSubmit({ id: detail?.id, name, type })}
                    variant="contained">
                        Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DetailFormDialog;