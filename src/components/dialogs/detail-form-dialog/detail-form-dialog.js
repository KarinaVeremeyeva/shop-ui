import React, { useState } from "react";
import { Button, Dialog, DialogContent, DialogActions, DialogTitle, MenuItem, TextField, FormHelperText } from "@mui/material";
import classes from '../dialogs.module.css';

const DetailFormDialog = ({ detail, types, open, onClose, onSubmit }) => {
    const [type, setType] = useState(detail?.type || 0);
    const [name, setName] = useState(detail?.name || '');
    const [errorText, setError] = useState();

    const dialogTitle = detail ? 'Edit detail' : 'Add detail';

    const handleNameChange = (e) => {
        setName(e.target.value);
        if(!e.target.value) {
            setError('Name should not be empty');
        }
        else {
            setError('');
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    required
                    label="Name"
                    value={name}
                    onChange={handleNameChange}
                    className={classes.textFieldWrapper}/>
                <TextField
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    select
                    label="Type"
                    margin="dense"
                >
                    {
                        types.map(type => <MenuItem key={type.value} value={type.value}>{type.name}</MenuItem>)
                    }
                </TextField>
                <FormHelperText error={!!errorText}>
                    {errorText}
                </FormHelperText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined">Cancel</Button>
                <Button
                    onClick={() => onSubmit({ id: detail?.id, name, type })}
                    variant="contained"
                    disabled={!name}
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DetailFormDialog;