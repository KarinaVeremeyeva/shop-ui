import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";

import ProductDetails from "../product-details";
import { withShopService, withRouter } from "../hoc";
import { compose } from "../../utils";
import CategoryList from "../category-list";
import { categoriesLoaded } from "../../actions";
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
                    <ProductDetails product={product}/>
                </Grid>
            </Grid>
        );
    }
};

const mapStateToProps = ({ categories }) => {
    return { categories };
}

const mapDispatchToProps = {
    categoriesLoaded
};

export default compose(
    withShopService(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProductDetailsPage);