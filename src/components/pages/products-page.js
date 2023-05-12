import React from "react";
import ProductList from "../product-list";
import { Grid } from "@mui/material";
import CategoryList from "../category-list";

import classes from './products-page.module.css';

const ProductsPage = () => {
    return (
        <Grid container className={classes.categoryWrapper}>
            <Grid item xs={3}><CategoryList /></Grid>
            <Grid item xs={6}><ProductList /></Grid>
        </Grid>
    );
};

export default ProductsPage;