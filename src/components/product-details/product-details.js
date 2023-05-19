import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography, Box } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import classes from './product-details.module.css';

const ProductDetails = ({ product }) => {
    const { name, price, categoryId, categoryName, details, photoUrl } = product;

    const setFormat = (type, value) => {
        return type == 'boolean' ? value ? <CheckIcon /> : <CloseIcon /> : value;
    };

    return (
        <Grid container>
            <Grid>
                <Typography variant="h6">{name}</Typography>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <Box 
                        component="img"
                        sx={{
                            height: '100%',
                            width: '100%'
                        }}
                        alt="item-image"
                        src={photoUrl}
                    />
                </Grid>
                <Grid item xs={6} className={classes.container}>
                    <Grid container alignItems="center" spacing={3} wrap="nowrap">
                        <Grid item>
                            <Typography variant="h6">${price}</Typography></Grid>
                        <Grid item>
                            <Button variant="contained" startIcon={<ShoppingCartIcon />}>
                                Cart
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid className={classes.detailsContainer}>
                        <Typography variant="body1">Category: {categoryName}</Typography>
                        <Typography variant="body1">Description</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.wrapDetailsGrid}>
                <Typography variant="body1">Details</Typography>
                {
                    details.map(detail => {
                        const { id, name: detailName, type, value } = detail;
                        return (
                            <Grid container key={`${id}-${type}-${value}`} columnGap={5}>
                                <Grid item xs={4}>{detailName}</Grid>
                                <Grid item xs={4} className={classes.wrapIcon}>{setFormat(type, value)}</Grid>
                            </Grid>
                        );
                    })
                }
            </Grid>
            <Button startIcon={<ArrowBackIcon />}>
                <Link
                    to={`/products/category/${categoryId}`}
                    style={{ textDecoration: 'none', color: 'inherit', textAlign: 'left'}}>
                    BACK TO PRODUCTS
                </Link>
            </Button>
        </Grid>
    );
}

export default ProductDetails;