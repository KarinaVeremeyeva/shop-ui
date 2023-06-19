import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormHelperText, MenuItem, TextField } from "@mui/material";

const CategoryFormDialog = ({ category, allCategories, open, onClose, onSubmit }) => {
    const [name, setName] = useState(category?.name || '');
    const [description, setDescription] = useState(category?.description || '');
    const [parentCategoryId, setParentCategoryId] = useState(category?.parentCategoryId || '');
    const [errorText, setError] = useState();

    const dialogTitle = typeof category === 'undefined' ? 'Add category' : 'Edit category';

    const handleNameChange = (e) => {
        setName(e.target.value);
        if(!e.target.value) {
            setError('Name should not be empty');
        }
        else {
            setError('');
        }
    };

    return(
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogContent>
                <div>
                    <TextField margin="dense" required value={name} label="Name" onChange={handleNameChange} />
                </div>
                <div>
                    <TextField margin="dense" value={description} label="Description" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <TextField
                        margin="dense"
                        value={parentCategoryId}
                        onChange={(e) => setParentCategoryId(e.target.value)}
                        select
                        label="Parent Category"
                        sx={{ width: 220 }}
                    >
                        {
                            allCategories.map(category => (
                                <MenuItem key={category.id} value={category.parentCategoryId}>
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
                    onClick={() => onSubmit({ id: category?.id, name, description, parentCategoryId: category?.parentCategoryId })}
                    variant="contained"
                    disabled={!name}
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CategoryFormDialog;
