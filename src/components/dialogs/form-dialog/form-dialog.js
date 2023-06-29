import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormHelperText } from "@mui/material"

const FormDialog = ({ open, onClose, onSubmit, dialogTitle, children, disabled, errorText }) => {
    return (
        <Dialog open={open} onClose={onClose}>
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