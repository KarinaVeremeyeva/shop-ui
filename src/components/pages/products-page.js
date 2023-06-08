import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";

import ProductList from "../product-list";
import CategoryList from "../category-list";
import { productsRequested, productsLoaded, productsError, categoriesLoaded, setFilters, productAddedToCart } from "../../actions";
import { compose } from "../../utils";
import { withShopService, withRouter } from "../hoc";
import { Filters } from "../filters";
import { makeFilters } from "../../utils";
import classes from './products-page.module.css';

class ProductsPage extends Component {
    componentDidMount() {
        const { shopService, categoriesLoaded } = this.props;

        shopService.getCategories()
            .then(categories => categoriesLoaded(categories));
        
        this.initializeProducts();
    };

    initializeProducts() {
        const { shopService, router, productsRequested, productsLoaded, productsError, setFilters } = this.props;
        const { categoryId } = router.params;

        productsRequested();
        shopService.getProducts(categoryId)
            .then(products => {
                productsLoaded(products);
                
                const selectedFilters = makeFilters(products);
                setFilters(selectedFilters);
            })
            .catch((error) => productsError(error));
    }

    componentDidUpdate(prevProps) {
        const { categoryId } = this.props.router.params;

        if (categoryId !== prevProps.router.params.categoryId) {
            this.initializeProducts();
        }
    }

    handleAddToCart = (productId) => {
        const { shopService, productAddedToCart} = this.props;

        shopService.addToCart(productId)
            .then(cartItem => productAddedToCart(cartItem));
    };

    render() {
        const { router, categories, products, filters } = this.props;
        const { categoryId } = router.params;

        return (
            <Grid container spacing={2} className={classes.pageContainer}>
                <Grid item xs={3}>
                    <Grid item xs={12}>
                        <CategoryList categories={categories} currentCategoryId={categoryId} />
                    </Grid>
                    {products.length > 1 && (
                        <Grid item xs={12}>
                            <Filters filters={filters} products={products}/>
                        </Grid>)}
                </Grid>
                <Grid item xs={6}>
                    <ProductList categoryId={categoryId} products={products} onAddProduct={this.handleAddToCart} />
                </Grid>
            </Grid>
        );
    };
};

const mapStateToProps = ({ products, categories, filters, loading }) => {
    return { products, categories, filters, loading };
}

const mapDispatchToProps = {
    productsRequested, productsLoaded, productsError, categoriesLoaded, setFilters, productAddedToCart
};

export default compose(
    withShopService(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProductsPage);