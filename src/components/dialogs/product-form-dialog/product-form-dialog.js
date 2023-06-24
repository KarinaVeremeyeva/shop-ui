import React, { useEffect, useState } from "react";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormHelperText, MenuItem, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { filterTypes } from '../../filters/filters';
import classes from '../dialogs.module.css';

const CheckDetailValueType = ({ type, value, onChange }) => {
    switch(type) {
        case filterTypes.STRING:
            return (
                <TextField
                    margin="dense"
                    type="text"
                    value={value}
                    onChange={(e) => onChange(`${e.target.value}`)}
                />
            );
        case filterTypes.NUMBER:
            return (
                <TextField
                    margin="dense"
                    type="number"
                    value={value}
                    onChange={(e) => onChange(`${e.target.value}`)}
                />
            );
        case filterTypes.BOOLEAN:
            const booleanValue = value.toLowerCase() === 'true';
            return (
                <Checkbox
                    checked={booleanValue}
                    onChange={(e) => onChange(`${e.target.checked}`)}
                />
            );
        default:
            break;
    };
};

const checkForErrors = (name, price, categoryId, productDetails) => {
    let errors = [];
    if (!name) {
        errors.push('Name should not be empty');
    }
    if (price <= 0 ) {
        errors.push('Price must be greater than 0');
    }
    if (!categoryId) {
        errors.push('Category should not be empty');
    }
    if (!productDetails.every(pd => pd.detailId)) {
        errors.push('Product detail is not selected');
    }
    if (!productDetails.every(pd => pd.value)) {
        errors.push('Product detail value is empty');
    }

    return errors.reduce((resultError, currentError) => resultError + '. ' + currentError, '');
}

const ProductFormDialog = ({ product, open, onClose, onSubmit, categories, details }) => {
    const [name, setName] = useState(product?.name || '');
    const [description, setDescription] = useState(product?.description || '');
    const [price, setPrice] = useState(product?.price || 0);
    const [categoryId, setCategoryId] = useState(product?.categoryId || '');
    const [productDetails, setProductDetails] = useState(product?.productDetails || []);
    const [availableDetais, setAvailableDetails] = useState([productDetails]);

    const [errorText, setError] = useState('');

    const dialogTitle = product ? 'Edit product' : 'Add product';

    useEffect(() => {
        const availableDetais = details.filter(d => !productDetails.find(pd => pd.detailId === d.id));
        setAvailableDetails(availableDetais);
    }, [setAvailableDetails, details, productDetails]);

    useEffect(() => {
        const error = checkForErrors(name, price, categoryId, productDetails);
        setError(error);
    }, [name, price, categoryId, productDetails, setError]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleAddDetail = () => {
        setProductDetails([...productDetails, {}]);
    };

    const handleRemoveDetail = (detailId) => {
        const newProductDetails = [...productDetails];
        var index = newProductDetails.indexOf(detailId)
        newProductDetails.splice(index, 1);
        setProductDetails(newProductDetails);
    };

    const handleDetailIdChange = (index, detailId) => {
        const newProductDetails = [...productDetails];
        const productDetail = {
            ...newProductDetails[index],
            detailId
        };
        
        newProductDetails[index] = productDetail;
        setProductDetails(newProductDetails);
    };

    const handleDetailValueChange = (index, value) => {
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
            name,
            description,
            price,
            categoryId: categoryId,
            productDetails
        });
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogContent>
                <div>
                    <TextField
                        margin="dense"
                        required
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
                        required
                        label="Price"
                        value={price}
                        type="number"
                        onChange={handlePriceChange}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        margin="dense"
                        value={categoryId}
                        required
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
                            <div key={`product_detail_${index}`} className={classes.productDetailsContainer}>
                                <TextField
                                    margin="dense"
                                    value={pd.detailId || ''}
                                    label="Detail Name"
                                    onChange={(e) => handleDetailIdChange(index, e.target.value)}
                                    select
                                    className={classes.textFieldWrapper}
                                >
                                    {pd.detailId && (
                                        <MenuItem
                                            key={`product_detail_select_detail_${pd.detailId}`}
                                            value={pd.detailId}
                                        >
                                            {details.find(d => d.id === pd.detailId)?.name}
                                        </MenuItem>
                                    )}
                                    {
                                        availableDetais.map(detail => (
                                            <MenuItem key={`product_detail_select_detail_${detail.id}`} value={detail.id}>
                                                {detail.name}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                                <CheckDetailValueType
                                    type={details.find(d => d.id === pd.detailId)?.type}
                                    value={pd.value || ''}
                                    onChange={(value) => handleDetailValueChange(index, value)}
                                />
                                <IconButton
                                    onClick={() => handleRemoveDetail(pd.detailId)}
                                    className={classes.deleteIcon}
                                >
                                    <DeleteIcon />
                                </IconButton>
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
                    disabled={!!errorText}
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProductFormDialog;