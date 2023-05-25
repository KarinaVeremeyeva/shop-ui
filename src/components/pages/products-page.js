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
import Spinner from "../spinner";
import classes from './products-page.module.css';

class ProductsPage extends Component {
    componentDidMount() {
        const { shopService, categoriesLoaded } = this.props;

        shopService.getCategories()
            .then(categories => categoriesLoaded(categories));
        
        this.initializeProducts();
    };

    initializeProducts() {
        const { shopService, router, productsLoaded, setFilters } = this.props;
        const { categoryId } = router.params;

        shopService.getProducts(categoryId)
            .then(products => {
                productsLoaded(products);
                
                const selectedFilters = makeFilters(products);
                setFilters(selectedFilters);
            });
    }

    componentDidUpdate(prevProps) {
        const categoryId = this.props.router.params.categoryId;

        if (categoryId !== prevProps.router.params.categoryId) {
            this.initializeProducts();
        }
    }

    render() {
        const { router, categories, products, filters, loading } = this.props;
        const id = router.params.categoryId;

        if (loading) {
            return <Spinner />;
        }

        return (
            <Grid container spacing={2} className={classes.pageContainer}>
                <Grid item xs={3}>
                    <Grid item xs={12}>
                        <CategoryList categories={categories}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Details filters={filters} products={products}/>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <ProductList categoryId={id} products={products}/>
                </Grid>
            </Grid>
    )};
};

const mapStateToProps = ({ products, categories, filters, loading }) => {
    return { products, categories, filters, loading };
}

const mapDispatchToProps = {
    productsLoaded, categoriesLoaded, setFilters
};

export default compose(
    withShopService(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProductsPage);