import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ShoppingCart from "../shopping-cart";
import { withShopService } from "../hoc";
import classes from './products-page.module.css';
import CategoryList from "../category-list";
import { getIsPermittedForUser } from '../../selectors/selectors';
import AccessDenied from "../access-denied";

const CartPage = ({ shopService }) => {
    const isAuthorized = useSelector(state => !!state.userData);
    const isUserPermited = useSelector(getIsPermittedForUser);
    const categories = useSelector(state => state.categories);
    
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