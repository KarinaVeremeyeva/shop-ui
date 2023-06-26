import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { withShopService } from "../hoc";
import { PRODUCTS_LIST, USER_DATA } from "../../reducers/constants";
import Spinner from "../spinner";
import { getIsPermittedForAdmin } from "../../selectors/selectors";
import ProductInfoList from "../product-info-list";
import AccessDenied from "../access-denied";
import {
    addProductError,
    addProductRequested,
    categoriesListError,
    categoriesListLoaded,
    categoriesListRequested,
    detailsError,
    detailsLoaded,
    detailsRequested,
    productAdded,
    productRemoved,
    productUpdated,
    productsListError,
    productsListLoaded,
    productsListRequested,
    removeProductError,
    removeProductRequested,
    updateProductError,
    updateProductRequested
} from "../../actions/admin-actions";
import classes from './pages.module.css';

const ProductsInfoPage = ({ shopService }) => {
    const isAuthorized = useSelector(state => !!state.userData);
    const isUserPermited = useSelector(getIsPermittedForAdmin);
    const products = useSelector(state => state.productsList);
    const loading = useSelector(state => state.loading[PRODUCTS_LIST] || state.loading[USER_DATA]);
    const categories = useSelector(state => state.categoriesList);
    const details = useSelector(state => state.details);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsListRequested());
        dispatch(categoriesListRequested());
        dispatch(detailsRequested());
        shopService.getProductsList()
            .then(products => dispatch(productsListLoaded(products)))
            .catch(error => dispatch(productsListError(error)));
        shopService.getCategoriesList()
            .then(categories => dispatch(categoriesListLoaded(categories)))
            .catch(error => dispatch(categoriesListError(error)));
        shopService.getDetails()
            .then(details => dispatch(detailsLoaded(details)))
            .catch(error => dispatch(detailsError(error)));
    }, [dispatch, shopService]);

    const handleAddProduct = (product) => {
        dispatch(addProductRequested());
        shopService.addProduct(product)
            .then(product => dispatch(productAdded(product)))
            .catch(error => dispatch(addProductError(error)));
    };

    const handleEditProduct = (product) => {
        dispatch(updateProductRequested());
        shopService.updateProduct(product)
            .then(product => dispatch(productUpdated(product)))
            .catch(error => dispatch(updateProductError(error)));
    };

    const handleRemoveProduct = (productId) => {
        dispatch(removeProductRequested());
        shopService.deleteProduct(productId)
            .then(() => dispatch(productRemoved(productId)))
            .catch(erorr => dispatch(removeProductError(erorr)));
    };

    if (loading) {
        return <Spinner />;
    }

    const pageContent = isAuthorized && isUserPermited
        ? (
        <ProductInfoList
                products={products}
                onAddProduct={handleAddProduct}
                onEditProduct={handleEditProduct}
                onRemoveProduct={handleRemoveProduct}
                categories={categories}
                details={details}
        />
        )
        : <AccessDenied />;

    return (
        <Grid container className={classes.pageContainer}>
            <Grid item xs={3} />
            <Grid item xs={6}>{pageContent}</Grid>
        </Grid>
    );
};

export default withShopService()(ProductsInfoPage);