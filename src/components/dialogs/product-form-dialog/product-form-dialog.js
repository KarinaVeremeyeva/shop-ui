import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormHelperText, MenuItem } from "@mui/material";
import classes from '../dialogs.module.css';

const ProductFormDialog = ({ product, open, onClose, onSubmit, categories }) => {
    const [name, setName] = useState(product?.name || '');
    const [description, setDescription] = useState(product?.description || '');
    const [categoryId, setCategoryId] = useState(product?.categoryId || '');
    const [errorText, setError] = useState();
    
    const dialogTitle = typeof product === 'undefined' ? 'Add product' : 'Edit product';

    const handleNameChange = (e) => {
        setName(e.target.value);
        if(!e.target.value) {
            setError('Name should not be empty');
        }
        else {
            setError('');
        }
    };

    const handleOnSubmit = () => {
        return onSubmit({ id: product?.id, description, name, categoryId: categoryId || null });
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogContent>
                <div>
                    <TextField
                        margin="dense"
                        label="Name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <TextField
                        margin="dense"
                        label="Description"
                        value={description}
                        multiline
                        className={classes.textField}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        margin="dense"
                        value={categoryId}
                        label="Category"
                        onChange={(e) => setCategoryId(e.target.value)}
                        select
                        className={classes.textField}
                    >
                        {
                            categories.map(category => (
                                <MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </div>
                <FormHelperText error={!!errorText}>
                    {errorText}
                </FormHelperText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined">Cancel</Button>
                <Button
                    onClick={handleOnSubmit}
                    variant="contained"
                    disabled={!name}
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProductFormDialog;