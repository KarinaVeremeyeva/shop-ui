import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ShoppingCart from "../shopping-cart";
import { withShopService } from "../hoc";
import CategoryList from "../category-list";
import { getIsPermittedForUser } from '../../selectors/selectors';
import AccessDenied from "../access-denied";
import classes from './pages.module.css';

const CartPage = ({ shopService }) => {
    const isAuthorized = useSelector(state => !!state.userData.userData);
    const isUserPermited = useSelector(getIsPermittedForUser);
    const categories = useSelector(state => state.shop.categories);
    
    const pageContent = isAuthorized && isUserPermited
        ? <ShoppingCart shopService={shopService} />
        : <AccessDenied />;

    return (
        <Grid container spacing={1} className={classes.pageContainer}>
            <Grid item xs={3}>
                <CategoryList categories={categories} />
            </Grid>
            <Grid item xs={6}>{pageContent}</Grid>
        </Grid>
    );
};

export default withShopService()(CartPage);