import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormHelperText } from "@mui/material"
import classes from '../dialogs.module.css';

const FormDialog = ({ open, onClose, onSubmit, dialogTitle, children, disabled, errorText }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            classes={{ paper: classes.dialog }}
        >
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogContent>
                {children}
                <FormHelperText error={!!errorText}>
                    {errorText}
                </FormHelperText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined">Cancel</Button>
                <Button
                    onClick={onSubmit}
                    variant="contained"
                    disabled={disabled}
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FormDialog;