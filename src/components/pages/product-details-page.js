import React, { Component } from "react";
import { Grid } from "@mui/material";

import ProductDetails from "../product-details";
import { withShopService, withRouter } from "../hoc";
import { compose } from "../../utils";
import classes from './products-page.module.css';

class ProductDetailsPage extends Component {
    state = {
        product: null
    };

    componentDidMount() {
        const { shopService, router } = this.props;
        const { productId } = router.params;
        if (!productId) {
            return;
        }

        const product = shopService.getProduct(productId);
        this.setState({product});
    };

    render() {
        const { product } = this.state;
        if (!product) {
            return null;
        }

        return (
            <Grid container spacing={1} className={classes.container}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <ProductDetails product={product}/>
                </Grid>
            </Grid>
        );
    }
};

export default compose(
    withShopService(),
    withRouter,
)(ProductDetailsPage);