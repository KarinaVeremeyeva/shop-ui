import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "../shopping-cart";
import { withShopService } from "../hoc";
import { categoriesLoaded } from "../../actions";
import classes from './products-page.module.css';
import CategoryList from "../category-list";
import { getIsPermittedForUser } from '../../selectors/selectors';

const CartPage = ({ shopService }) => {
    const isAuthorized = useSelector(state => !!state.userData);
    const isUserPermited = useSelector(getIsPermittedForUser);
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        shopService.getCategories()
            .then(categories => dispatch(categoriesLoaded(categories)));
        }, [shopService, dispatch]
    );
    
    const pageContent = isAuthorized && isUserPermited
        ? <ShoppingCart shopService={shopService} />
        : 'Permission denied';

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