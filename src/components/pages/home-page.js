import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { withShopService } from "../hoc";
import CategoryList from "../category-list";
import { categoriesLoaded } from "../../actions";
import classes from './products-page.module.css';

const HomePage = ({ shopService }) => {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        shopService.getCategories()
            .then(categories => dispatch(categoriesLoaded(categories)))
        }, [shopService, dispatch]
    );
    
    return (
        <Grid container spacing={1} className={classes.pageContainer}>
            <Grid item xs={3}>
                <CategoryList categories={categories}></CategoryList>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6">Select product category</Typography>
            </Grid>
        </Grid>
    );
};

export default withShopService()(HomePage);