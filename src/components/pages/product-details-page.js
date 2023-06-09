import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import ProductDetails from "../product-details";
import { withShopService } from "../hoc";
import CategoryList from "../category-list";
import { categoriesLoaded, productAddedToCart, requestAddProductToCart } from "../../actions";
import classes from './products-page.module.css';

const ProductDetailsPage = ({ shopService }) => {
    const [product, setProduct] = useState();
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const { productId } = useParams();

    useEffect(() => {
        if (!productId) {
            return;
        }

        shopService.getProduct(productId)
            .then(product => setProduct(product));

        shopService.getCategories()
            .then(categories => dispatch(categoriesLoaded(categories)));   
        }, [shopService, dispatch, productId]
    );

    const handleAddToCart = (productId) => {
        dispatch(requestAddProductToCart());
        shopService.addToCart(productId)
            .then(cartItem => dispatch(productAddedToCart(cartItem)));
    };

    if (!product) {
        return null;
    }

    const { category: { id: categoryId } } = product;

    return (
        <Grid container spacing={1} className={classes.pageContainer}>
            <Grid item xs={3}>
                <CategoryList categories={categories} currentCategoryId={categoryId} />
            </Grid>
            <Grid item xs={6}>
                <ProductDetails product={product} onClick={() => handleAddToCart(product.id)} />
            </Grid>
        </Grid>
    );
};

export default withShopService()(ProductDetailsPage);