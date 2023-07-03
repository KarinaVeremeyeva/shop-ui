import React, { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import FormDialog from "../../dialogs/form-dialog";

const CategoryFormDialog = ({ category, allCategories, open, onClose, onSubmit }) => {
    const [name, setName] = useState(category?.name || '');
    const [description, setDescription] = useState(category?.description || '');
    const [parentCategoryId, setParentCategoryId] = useState(category?.parentCategoryId || '');
    const [errorText, setError] = useState();

    const dialogTitle = category ? 'Edit category' : 'Add category';

    const handleNameChange = (e) => {
        setName(e.target.value);
        setError(!e.target.value ? 'Name should not be empty' : '');
    };

    const handleOnSubmit = () => {
        onSubmit({ id: category?.id, name, description, parentCategoryId: parentCategoryId || null });
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
            <div>
                <TextField
                    margin="dense"
                    required
                    value={name}
                    label="Name"
                    onChange={handleNameChange}
                    fullWidth
                />
            </div>
            <div>
                <TextField
                    margin="dense"
                    value={description}
                    label="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                />
            </div>
            <div>
                <TextField
                    margin="dense"
                    value={parentCategoryId}
                    onChange={(e) => setParentCategoryId(e.target.value)}
                    select
                    label="Parent Category"
                    fullWidth
                >
                    <MenuItem value={""}>
                        <em>None</em>
                    </MenuItem>
                    {
                        allCategories.map(category => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.name}
                            </MenuItem>
                        ))
                    }
                </TextField>
            </div>
        </FormDialog>
    );
};

export default CategoryFormDialog;