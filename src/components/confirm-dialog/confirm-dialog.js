import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const ConfirmDialog = ({ open, handleClose, handleSubmit, title, children }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="outlined">Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Confirm</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;