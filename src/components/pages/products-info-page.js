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
    fetchDetails,
    fetchProductsList,
    fetchCategoriesList,
    addProduct,
    updateProduct,
    deleteProduct
} from "../../actions/admin-actions";
import classes from './pages.module.css';

const ProductsInfoPage = ({ shopService }) => {
    const isAuthorized = useSelector(state => !!state.userData.userData);
    const isAdminPermited = useSelector(getIsPermittedForAdmin);
    const products = useSelector(state => state.admin.productsList);
    const loading = useSelector(state => state.admin.loading[PRODUCTS_LIST] || state.user.loading[USER_DATA]);
    const categories = useSelector(state => state.admin.categoriesList);
    const details = useSelector(state => state.admin.details);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isAdminPermited) {
            dispatch(fetchProductsList(shopService));
            dispatch(fetchCategoriesList(shopService));
            dispatch(fetchDetails(shopService));
        }
    }, [dispatch, shopService, isAdminPermited]);

    const handleAddProduct = (product) => {
        dispatch(addProduct(shopService, product));
    };

    const handleEditProduct = (product) => {
        dispatch(updateProduct(shopService, product));
    };

    const handleRemoveProduct = (productId) => {
        dispatch(deleteProduct(shopService, productId));
    };

    if (loading) {
        return <Spinner />;
    }

    const pageContent = isAuthorized && isAdminPermited
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