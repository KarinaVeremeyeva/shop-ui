import React, { Component } from "react";
import { Grid } from "@mui/material";
import { connect } from "react-redux";

import { withShopService, withRouter } from "../hoc";
import { compose } from "../../utils";
import CategoryList from "../category-list";
import { categoriesLoaded } from "../../actions";
import classes from './products-page.module.css';

class HomePage extends Component {
    componentDidMount() {
        const { shopService, categoriesLoaded } = this.props; 
        shopService.getCategories()
            .then(categories => categoriesLoaded(categories));
    };
    
    render() {
        const { categories } = this.props;

        return (
            <Grid container spacing={1} className={classes.pageContainer}>
                <Grid item xs={3}>
                    <CategoryList categories={categories}></CategoryList>
                </Grid>
                <Grid item xs={6} />
            </Grid>
        );
    }
};

const mapStateToProps = ({ categories }) => {
    return { categories };
}

const mapDispatchToProps = {
    categoriesLoaded
};

export default compose(
    withShopService(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(HomePage);