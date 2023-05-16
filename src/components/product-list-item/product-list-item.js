import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const ProductListItem = ({ product }) => {
    const { name, price, categoryId } = product;
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', border: '1px solid lightblue', borderRadius: '0.7rem' }}>
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