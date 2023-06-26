import React from "react";
import { useSelector } from "react-redux";
import { Button, Grid, Typography, Box } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import classes from './product-details.module.css';
import image from '../../assets/no-image.jpg';
import SpinnerButton from "../spinner/spinner-button";
import { ADD_PRODUCT_TO_CART } from "../../reducers/constants";

const ProductDetails = ({ product, onClick }) => {
    const {  id, name, price, description, category, details, photoUrl } = product;
    const { name: categoryName } = category;
    const photo = photoUrl || image;
    const loading = useSelector(state => state.user.loading[ADD_PRODUCT_TO_CART]);

    const setFormat = (type, value) => {
        return type === 'boolean' ? value ? <CheckIcon /> : <CloseIcon /> : value;
    };

    return (
        <Grid container>
            <Typography variant="h6">{name}</Typography>
            <Grid container>
                <Grid item xs={6}>
                    <Box src={photo} component="img" className={classes.itemImage} alt="item-image" />
                </Grid>
                <Grid item xs={6} className={classes.descriptionContainer}>
                    <Grid container alignItems="center" spacing={3} wrap="nowrap">
                        <Grid item>
                            <Typography variant="h6">${price}</Typography>
                        </Grid>
                        <Grid item>
                            <SpinnerButton loading={loading}>
                                {(loading) => (
                                    <Button
                                        onClick={() => onClick(id)}
                                        disabled={loading}
                                        variant="contained"
                                        startIcon={<ShoppingCartIcon />}>
                                        Buy
                                    </Button>
                                )}
                            </SpinnerButton>
                        </Grid>
                    </Grid>
                    <Grid className={classes.detailsContainer}>
                        <Typography variant="body1">Category: {categoryName}</Typography>
                        <Typography variant="body1">Description</Typography>
                        <Typography variant="body1">{description}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.detailsGridWrapper}>
                {!!details.length && (<Typography variant="body1">Details</Typography>)}
                {
                    details.map(detail => {
                        const { id, name: detailName, type, value } = detail;
                        return (
                            <Grid container key={`${id}-${type}-${value}`} columnGap={5}>
                                <Grid item xs={4}>{detailName}</Grid>
                                <Grid item xs={4} className={classes.iconWrapper}>{setFormat(type, value)}</Grid>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Grid>
    );
}

export default ProductDetails;