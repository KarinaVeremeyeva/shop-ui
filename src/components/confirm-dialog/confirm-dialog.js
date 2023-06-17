import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const ConfirmDialog = ({ open, onClose, onSubmit, title, children }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined">Cancel</Button>
                <Button onClick={onSubmit} variant="contained" color="primary">Confirm</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;