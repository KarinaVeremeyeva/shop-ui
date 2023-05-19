import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";

import ProductList from "../product-list";
import CategoryList from "../category-list";
import { productsLoaded, categoriesLoaded, setFilters } from "../../actions";
import { compose } from "../../utils";
import { withShopService, withRouter } from "../hoc";
import Details from "../details";
import { makeFilters } from "../../utils";
import classes from './products-page.module.css';

class ProductsPage extends Component {
    componentDidMount() {
        const { shopService, categoriesLoaded } = this.props;

        const categories = shopService.getCategories();
        categoriesLoaded(categories);
        this.initializeProducts();
    };

    initializeProducts() {
        const { shopService, router, productsLoaded, setFilters } = this.props;
        const { categoryId } = router.params;

        const products = shopService.getProducts(categoryId);
        productsLoaded(products);

        const selectedFilters = makeFilters(products);
        setFilters(selectedFilters);
    }

    componentDidUpdate(prevProps) {
        const categoryId = this.props.router.params.categoryId;

        if (categoryId !== prevProps.router.params.categoryId) {
            this.initializeProducts();
        }
    }

    render() {
        const { router, categories, products, filters } = this.props;
        const id = router.params.categoryId;

        return (
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={3}>
                    <Grid item xs={12}>
                        <CategoryList categories={categories}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Details filters={filters}/>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <ProductList categoryId={id} products={products}/>
                </Grid>
            </Grid>
    )};
};

const mapStateToProps = ({ products, categories, filters }) => {
    return { products, categories, filters };
}

const mapDispatchToProps = {
    productsLoaded, categoriesLoaded, setFilters
};

export default compose(
    withShopService(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProductsPage);