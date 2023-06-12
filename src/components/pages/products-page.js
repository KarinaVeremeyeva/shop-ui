import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { Grid, Pagination } from "@mui/material";
import ProductList from "../product-list";
import CategoryList from "../category-list";
import { productsRequested, productsLoaded, productsError, setFilters, productAddedToCart, requestAddProductToCart, addProductToCartError } from "../../actions";
import { withShopService } from "../hoc";
import { Filters } from "../filters";
import { makeFilters } from "../../utils";
import classes from './products-page.module.css';

const ProductsPage = ({ shopService }) => {
    const categories = useSelector(state => state.categories);
    const products = useSelector(state => state.products.products);
    const filters = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const totalCount = useSelector(state => state.products.totalPages);

    const handleChange = (event, value) => {
        setSearchParams({ pageNumber: +value });
    };

    const pageNumber = +searchParams.get('pageNumber') || 1;

    useEffect(() => {
        dispatch(productsRequested());
        shopService.getProducts(categoryId, { pageNumber })
            .then(products => {
                dispatch(productsLoaded(products));
                
                const selectedFilters = makeFilters(products.products);
                dispatch(setFilters(selectedFilters));
            })
            .catch((error) => dispatch(productsError(error)));
        }, [categoryId, dispatch, shopService, pageNumber]
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
            {products.length > 0 && (
                <Grid item xs={6}>
                    <Pagination count={totalCount} color="primary" page={pageNumber} onChange={handleChange} classes={{ root: classes.paginationWrapper }}/>
                    <ProductList categoryId={categoryId} products={products} onAddProduct={handleAddToCart} />
                </Grid>)}        
        </Grid>
    );
};

export default withShopService()(ProductsPage);