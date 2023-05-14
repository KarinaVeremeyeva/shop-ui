import React, { Component } from "react";

import ProductList from "../product-list";
import { Grid } from "@mui/material";
import CategoryList from "../category-list";
import { productsLoaded, categoriesLoaded } from "../../actions";
import { compose } from "../../utils";
import { connect } from "react-redux";
import { withShopService, withRouter } from "../hoc";

import classes from './products-page.module.css';

class ProductsPage extends Component {
    componentDidMount() {
        const { shopService, categoriesLoaded } = this.props;

        const categories = shopService.getCategories()
        categoriesLoaded(categories)
    };

    componentDidUpdate(prevProps) {
        const { shopService, productsLoaded } = this.props;
        const categoryId = this.props.router.params.categoryId;

        if (categoryId !== prevProps.router.params.categoryId) {
            const products = shopService.getProducts(categoryId);
            productsLoaded(products);
        }
    }

    render() {
        const { router, categories, products } = this.props;
        const id = router.params.categoryId;

        return (
            <Grid container className={classes.categoryWrapper}>
                <Grid item xs={3}>
                    <CategoryList categories={categories}/>
                </Grid>
                <Grid item xs={6}>
                    <ProductList categoryId={id} products={products}/>
                </Grid>
            </Grid>
    )};
};

const mapStateToProps = ({ products, categories }) => {
    return { products, categories };
}

const mapDispatchToProps = {
    productsLoaded, categoriesLoaded
};

export default compose(
    withShopService(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProductsPage);