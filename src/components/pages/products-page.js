import React from "react";
import ProductList from "../product-list";
import { Grid } from "@mui/material";
import { css } from "@mui/material/styles";
import CategoryList from "../category-list";
import { css as emotionCss } from "@emotion/css"

const classes = {
    categoryWrapper: {
        padding: "16px"
    }
}

const ProductsPage = () => {
    const categoryWrapperClassName = emotionCss(css(classes.categoryWrapper))
    return (
        <Grid container className={categoryWrapperClassName}>
            <Grid item xs={3}><CategoryList /></Grid>
            <Grid item xs={6}><ProductList /></Grid>
        </Grid>
    );
};

export default ProductsPage;