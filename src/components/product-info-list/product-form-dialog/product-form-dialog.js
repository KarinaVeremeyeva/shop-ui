import React, { useEffect, useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import ProductDetailItem from "./product-detail-item";
import { getValidationErrors } from "./get-validation-errors";
import FormDialog from "../../dialogs/form-dialog";
import classes from '../../dialogs/dialogs.module.css';

const ProductFormDialog = ({ product, open, onClose, onSubmit, categories, details }) => {
    const [name, setName] = useState(product?.name || '');
    const [description, setDescription] = useState(product?.description || '');
    const [price, setPrice] = useState(product?.price || 0);
    const [categoryId, setCategoryId] = useState(product?.categoryId || '');
    const [productDetails, setProductDetails] = useState(product?.productDetails || []);
    const [availableDetails, setAvailableDetails] = useState([]);

    const [errorText, setError] = useState('');

    const dialogTitle = product ? 'Edit product' : 'Add product';

    useEffect(() => {
        const availableDetails = details.filter(d => !productDetails.find(pd => pd.detailId === d.id));
        setAvailableDetails(availableDetails);
    }, [setAvailableDetails, details, productDetails]);

    useEffect(() => {
        const validationErrors = getValidationErrors(name, price, categoryId, productDetails);
        setError(validationErrors);
    }, [name, price, categoryId, productDetails, setError]);

    const handleAddDetail = () => {
        setProductDetails([...productDetails, {}]);
    };

    const handleRemoveDetail = (detailId) => {
        const index = productDetails.findIndex(pd => pd.detailId === detailId);
        const newProductDetails = [
            ...productDetails.slice(0, index),
            ...productDetails.slice(index + 1),
        ];
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
        <FormDialog
            open={open}
            onClose={onClose}
            onSubmit={handleOnSubmit}
            dialogTitle={dialogTitle}
            disabled={!!errorText}
            errorText={errorText}
        >
            <div>
                <TextField
                    margin="dense"
                    required
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setPrice(e.target.value)}
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
                    productDetails.map((pd, index) => {
                        const detail = details.find(d => d.id === pd.detailId);
                        return (
                            <ProductDetailItem
                                productDetail={pd}
                                key={`product_detail_${index}`}
                                detail={detail}
                                availableDetails={availableDetails}
                                onChangeDetailId={(value) => handleDetailIdChange(index, value)}
                                onChangeDetailValue={(value) => handleDetailValueChange(index, value)}
                                onRemoveDetail={handleRemoveDetail}
                            />
                        );
                    })
                }
            </div>     
        </FormDialog>
    );
};

export default ProductFormDialog;