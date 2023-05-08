import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const ProductListItem = ({ product }) => {
    const { name, price, category } = product;
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
                <CardContent>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="body1">{price}</Typography>
                    <Typography variant="body1">{category}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ProductListItem;