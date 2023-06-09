import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import ProductListItem from "../product-list-item";
import Spinner from "../spinner";

const ProductList = ({ products, onAddProduct }) => {
    const loading = useSelector(state => state.loading['products']);
    if (loading) {
        return <Spinner />;
    }

    return (
        <Grid container spacing={3}>
            { products.map((product) => <ProductListItem key={product.id} product={product} onClick={onAddProduct} />) }
        </Grid>
    );
};

export default ProductList;