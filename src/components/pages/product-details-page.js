import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";

import ProductDetails from "../product-details";
import { withShopService, withRouter } from "../hoc";
import { compose } from "../../utils";
import CategoryList from "../category-list";
import { categoriesLoaded, productAddedToCart } from "../../actions";
import classes from './products-page.module.css';


class ProductDetailsPage extends Component {
    state = {
        product: null
    };

    componentDidMount() {
        const { shopService, router, categoriesLoaded } = this.props;
        const { productId } = router.params;
        if (!productId) {
            return;
        }

        shopService.getProduct(productId)
            .then(product => this.setState({product}));

        shopService.getCategories()
            .then(categories => categoriesLoaded(categories));
    };

    handleAddToCart = (productId) => {
        const { shopService } = this.props;

        shopService.addToCart(productId)
            .then(cartItem => productAddedToCart(cartItem));
    };

    render() {
        const { categories } = this.props;
        const { product } = this.state;
        if (!product) {
            return null;
        }

        return (
            <Grid container spacing={1} className={classes.pageContainer}>
                <Grid item xs={3}>
                    <CategoryList categories={categories}></CategoryList>
                </Grid>
                <Grid item xs={6}>
                    <ProductDetails product={product} onClick={() => this.handleAddToCart(product.id)}
                />
                </Grid>
            </Grid>
        );
    }
};

const mapStateToProps = ({ categories, productId }) => {
    return { categories, productId };
}

const mapDispatchToProps = {
    categoriesLoaded, productAddedToCart
};

export default compose(
    withShopService(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProductDetailsPage);