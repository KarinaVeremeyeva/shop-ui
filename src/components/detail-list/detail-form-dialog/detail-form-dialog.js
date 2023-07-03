import React, { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import FormDialog from "../../dialogs/form-dialog";
import classes from '../../dialogs/dialogs.module.css';

const DetailFormDialog = ({ detail, types, open, onClose, onSubmit }) => {
    const [type, setType] = useState(detail?.type || 0);
    const [name, setName] = useState(detail?.name || '');
    const [errorText, setError] = useState();

    const dialogTitle = detail ? 'Edit detail' : 'Add detail';

    const handleNameChange = (e) => {
        setName(e.target.value);
        setError(!e.target.value ? 'Name should not be empty' : '');
    };

    const handleOnSubmit = () => {
        onSubmit({ id: detail?.id, name, type });
    };

    return (
        <FormDialog
            open={open}
            onClose={onClose}
            onSubmit={handleOnSubmit}
            dialogTitle={dialogTitle}
            disabled={!name}
            errorText={errorText}
        >
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
        </FormDialog>
    );
};

export default DetailFormDialog;