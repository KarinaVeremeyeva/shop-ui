import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import ProductInfoListItem from "../product-info-list-item";
import { PRODUCTS_LIST } from "../../reducers/constants";
import Spinner from "../spinner";
import ProductFormDialog from "../dialogs/product-form-dialog";
import ConfirmDialog from "../dialogs/confirm-dialog";
import classes from './product-info-list.module.css';

const ProductInfoList = ({ products, onAddProduct, onEditProduct, onRemoveProduct, categories, details }) => {
    const [open, setOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();

    const loading = useSelector(state => state.loading[PRODUCTS_LIST]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (productId) => {
        const product = products.find(p => p.id === productId);
        setSelectedProduct(product);
        setOpen(true);
    };

    const handleCloseConfirm = () => {
        setOpenConfirm(false);
    };

    const handleOpenConfirm = (productId) => {
        const product = products.find(p => p.id === productId);
        setSelectedProduct(product);
        setOpenConfirm(true);
    };

    const handleOnRemove = (productId) => {
        onRemoveProduct(productId);
        handleCloseConfirm();
    };

    const handleOnUpdate = (product) => {
        const handleUpdate = selectedProduct ? onEditProduct : onAddProduct;
        handleUpdate(product);
        handleClose();
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <Grid container>
                <Button
                    onClick={() => handleOpen()}
                    variant="outlined"
                    color="success"
                    className={classes.btnWrapper}
                >
                    Add product
                </Button>
                {
                    products.map(product => (
                        <ProductInfoListItem
                            key={product.id}
                            product={product}
                            onOpen={handleOpen}
                            onOpenConfirm={handleOpenConfirm}
                        />
                    ))}
            </Grid>
            {open && (
                <ProductFormDialog
                    open={open}
                    product={selectedProduct}
                    onClose={handleClose}
                    onSubmit={handleOnUpdate}
                    categories={categories}
                    details={details}
                />
            )}
            {openConfirm && (
                <ConfirmDialog
                    open={openConfirm}
                    onClose={handleCloseConfirm}
                    onSubmit={() => handleOnRemove(selectedProduct.id)}
                    title={"Confirm product deleting"}
                >
                    Are you sure you want to delete a product "{selectedProduct.name}"? 
                </ConfirmDialog>
            )}
        </>
    );
};

export default ProductInfoList;