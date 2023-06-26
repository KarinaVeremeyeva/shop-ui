import React from "react";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { withShopService } from "../hoc";
import CategoryList from "../category-list";
import classes from './pages.module.css';

const HomePage = () => {
    const categories = useSelector(state => state.shop.categories);
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