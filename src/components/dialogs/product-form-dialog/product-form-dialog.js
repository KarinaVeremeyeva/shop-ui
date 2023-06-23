import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormHelperText, MenuItem } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import classes from '../dialogs.module.css';

const ProductFormDialog = ({ product, open, onClose, onSubmit, categories, details }) => {
    const [name, setName] = useState(product?.name || '');
    const [description, setDescription] = useState(product?.description || '');
    const [categoryId, setCategoryId] = useState(product?.categoryId || '');
    const [productDetails, setProductDetails] = useState(product?.productDetails || []);
    const [availableDetais, setAvailableDetails] = useState([productDetails]);

    const [errorText, setError] = useState();

    const dialogTitle = typeof product === 'undefined' ? 'Add product' : 'Edit product';

    useEffect(() => {
        const availableDetais = details.filter(d => !productDetails.find(pd => pd.detailId === d.id));
        setAvailableDetails(availableDetais);
    }, [setAvailableDetails, details, productDetails]);

    const handleNameChange = (e) => {
        setName(e.target.value);
        if(!e.target.value) {
            setError('Name should not be empty');
        }
        else {
            setError('');
        }
    };

    const handleAddDetail = () => {
        setProductDetails([...productDetails, {}]);
    };

    const handleRemoveDetail = (detailId) => {
        const newProductDetails = [...productDetails];
        var index = newProductDetails.indexOf(detailId)
        newProductDetails.splice(index, 1);
        setProductDetails(newProductDetails);
        console.log(newProductDetails);
    };

    const handleDetailId = (index, detailId) => {
        const newProductDetails = [...productDetails];
        const productDetail = {
            ...newProductDetails[index],
            detailId
        };
        
        newProductDetails[index] = productDetail;
        setProductDetails(newProductDetails);
    };

    const handleDetailValue = (index, value) => {
        const newProductDetails = [...productDetails];
        const productDetail = {
            ...newProductDetails[index],
            value
        }
        newProductDetails[index] = productDetail;
        setProductDetails(newProductDetails);
    };

    const handleOnSubmit = () => {
        return onSubmit({
            id: product?.id,
            description,
            name,
            categoryId: categoryId,
            productDetails
        });
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
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        margin="dense"
                        label="Description"
                        value={description}
                        multiline
                        rows={3}
                        fullWidth
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
                        fullWidth
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
                <div>
                    <Button
                        variant="outlined"
                        onClick={() => handleAddDetail()}
                        classes={{ root: classes.addBtnWrapper }}
                    >
                        Add detail
                    </Button>
                    {
                        productDetails.map((pd, index) => (
                            <div key={index} className={classes.align}>
                                <TextField
                                    margin="dense"
                                    value={pd.detailId}
                                    label="Detail Name"
                                    onChange={(e) => handleDetailId(index, e.target.value)}
                                    select
                                    className={classes.textFieldWrapper}
                                >
                                    {pd.detailId && (
                                        <MenuItem
                                            key={pd.detailId}
                                            value={pd.detailId}
                                        >
                                            {details.find(d => d.id === pd.detailId)?.name}
                                        </MenuItem>
                                    )}
                                    {
                                        availableDetais.map(detail => (
                                            <MenuItem key={detail.id} value={detail.id}>
                                                {detail.name}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                                <TextField
                                    margin="dense"
                                    label="Value"
                                    value={pd.value}
                                    onChange={(e) => handleDetailValue(index, e.target.value)}
                                />
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => handleRemoveDetail(pd.detailId)}
                                    startIcon={<CloseIcon />}
                                    classes={{ startIcon: classes.btnIcon, root: classes.btnSize }}
                                />
                            </div>
                        ))
                    }
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