import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { Grid, Pagination } from "@mui/material";
import ProductList from "../product-list";
import CategoryList from "../category-list";
import { productsRequested, productsLoaded, productsError } from "../../actions/shop-actions";
import { productAddedToCart, requestAddProductToCart, addProductToCartError } from "../../actions/user-actions";
import { withShopService } from "../hoc";
import { Filters } from "../filters";
import classes from './pages.module.css';

const ProductsPage = ({ shopService }) => {
    const categories = useSelector(state => state.shop.categories);
    const products = useSelector(state => state.shop.productsInfo.products);
    const filters = useSelector(state => state.shop.productsInfo.filters);
    const totalCount = useSelector(state => state.shop.productsInfo.totalPages);

    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (event, value) => {
        setSearchParams({ pageNumber: +value });
    };

    const pageNumber = +searchParams.get('pageNumber') || 1;

    useEffect(() => {
        dispatch(productsRequested());
        shopService.getProducts(categoryId, { pageNumber })
            .then(products => {
                dispatch(productsLoaded(products));
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

    const onFiltersUpdated = useCallback((selectedFilters) => {
        dispatch(productsRequested());
        shopService.getProducts(categoryId, { pageNumber }, selectedFilters)
            .then(products => dispatch(productsLoaded(products)))
            .catch((error) => dispatch(productsError(error)));
    }, [categoryId, dispatch, pageNumber, shopService])
    
    return (
        <Grid container spacing={2} className={classes.pageContainer}>
            <Grid item xs={3}>
                <Grid item xs={12}>
                    <CategoryList categories={categories} currentCategoryId={categoryId} />
                </Grid>
                <Grid item xs={12}>
                    <Filters key={`filters_for_${categoryId}`} filters={filters} onFiltersUpdated={onFiltersUpdated} />
                </Grid>
            </Grid>
                <Grid item xs={6}>
                    {products.length > 0 && (
                        <Pagination
                            count={totalCount}
                            color="primary"
                            page={pageNumber}
                            onChange={handleChange}
                            classes={{ root: classes.paginationWrapper }}
                        />
                    )}
                    <ProductList categoryId={categoryId} products={products} onAddProduct={handleAddToCart} />
                </Grid>
        </Grid>
    );
};

export default withShopService()(ProductsPage);