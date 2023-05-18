import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import classes from './product-list-item.module.css';

const ProductListItem = ({ product }) => {
    const { name, price, categoryId } = product;
    return (
        <Grid item xs={12} md={4}>
            <Card classes={{ root: classes.productListItem }}>
                <CardContent>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="body1">{price}</Typography>
                    <Typography variant="body1">{categoryId}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ProductListItem;