import React, { Component } from "react";

import ProductList from "../product-list";
import { Grid } from "@mui/material";
import CategoryList from "../category-list";
import { productsLoaded, categoriesLoaded, setFilters } from "../../actions";
import { compose } from "../../utils";
import { connect } from "react-redux";
import { withShopService, withRouter } from "../hoc";
import Details from "../details";
import classes from './products-page.module.css';
import { makeFilters } from "../../utils";

class ProductsPage extends Component {
    componentDidMount() {
        const { shopService, categoriesLoaded } = this.props;

        const categories = shopService.getCategories();
        categoriesLoaded(categories);
    };

    componentDidUpdate(prevProps) {
        const { shopService, productsLoaded, setFilters } = this.props;
        const categoryId = this.props.router.params.categoryId;

        if (categoryId !== prevProps.router.params.categoryId) {
            const products = shopService.getProducts(categoryId);
            productsLoaded(products);

            const allSelectedFilters = makeFilters(products);

            const selectedFilters = allSelectedFilters.reduce((accumulator, currentValue) => {
                const index = accumulator.findIndex(item => item.id === currentValue.id);
                if (index !== -1) {
                    if (!accumulator[index].value.includes(currentValue.value)) {
                        accumulator[index].value.push(currentValue.value);
                    }
                }
                else {
                    accumulator.push({
                        ...currentValue,
                        value: [currentValue.value]});
                }
    
                return accumulator;
            }, []);
            
            setFilters(selectedFilters);
        }
    }

    render() {
        const { router, categories, products, filters } = this.props;
        const id = router.params.categoryId;

        return (
            <Grid container className={classes.categoryWrapper}>
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