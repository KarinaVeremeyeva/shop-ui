import React from "react";
import { Grid } from "@mui/material";
import ProductListItem from "../product-list-item";

const ProductList = ({ products, onAddProduct }) => {
    return (
        <Grid container spacing={3}>
            { products.map((product) => <ProductListItem key={product.id} product={product} onClick={onAddProduct} />) }
        </Grid>
    );
};

export default ProductList;