import React, { Component } from "react";

import ProductListItem from "../product-list-item";
import { Grid } from "@mui/material";

class ProductList extends Component {
    render() {
        const { products, onAddProduct } = this.props;

        return (
            <Grid container spacing={3}>
                {
                    products.map((product) => {
                        return (
                            <ProductListItem key={product.id} product={product} onClick={onAddProduct} />
                        );
                    })
                }
            </Grid>
        );
    };
};

export default ProductList;