import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import ProductList from "../product-list";
import CategoryList from "../category-list";
import { productsRequested, productsLoaded, productsError, categoriesLoaded, setFilters, productAddedToCart, requestAddProductToCart, addProductToCartError } from "../../actions";
import { withShopService } from "../hoc";
import { Filters } from "../filters";
import { makeFilters } from "../../utils";
import classes from './products-page.module.css';

const ProductsPage = ({ shopService }) => {
    const categories = useSelector(state => state.categories);
    const products = useSelector(state => state.products);
    const filters = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const { categoryId } = useParams();

    useEffect(() => {
        shopService.getCategories()
            .then(categories => dispatch(categoriesLoaded(categories)));
        }, [dispatch, shopService]
    );
    
    useEffect(() => {
        dispatch(productsRequested());
        shopService.getProducts(categoryId)
            .then(products => {
                dispatch(productsLoaded(products));
                
                const selectedFilters = makeFilters(products);
                dispatch(setFilters(selectedFilters));
            })
            .catch((error) => dispatch(productsError(error)));
        }, [categoryId, dispatch, shopService]
    );

    const handleAddToCart = (productId) => {
        dispatch(requestAddProductToCart());
        shopService.addToCart(productId)
            .then(cartItem => dispatch(productAddedToCart(cartItem)))
            .catch(error => dispatch(addProductToCartError(error)));
    };

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
                <ProductList categoryId={categoryId} products={products} onAddProduct={handleAddToCart} />
            </Grid>
        </Grid>
    );
};

export default withShopService()(ProductsPage);