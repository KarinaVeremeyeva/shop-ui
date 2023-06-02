import React from "react";
import { Grid } from "@mui/material";
import ShoppingCart from "../shopping-cart";
import { withShopService } from "../hoc";
import { useSelector } from "react-redux";
import classes from './products-page.module.css';

const CartPage = ({ shopService }) => {
    const isAuthorized = useSelector(state => !!state.userData)

    const pageContent = isAuthorized
        ? <ShoppingCart shopService={shopService} />
        : 'Permission denied';

    return (
        <Grid container spacing={1} className={classes.pageContainer}>
            <Grid item xs={3} />
            <Grid item xs={6}>{pageContent}</Grid>
        </Grid>
    );
};

export default withShopService()(CartPage);