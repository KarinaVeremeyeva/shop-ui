import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { withShopService } from "../hoc";
import CategoryInfoList from "../category-info-list";
import AccessDenied from "../access-denied";
import { getIsPermittedForAdmin } from "../../selectors/selectors";
import {
    addCategoryRequested,
    addCategoryError,
    categoriesListError,
    categoriesListLoaded,
    categoriesListRequested,
    categoryAdded,
    categoryRemoved,
    categoryUpdated,
    removeCategoryError,
    removeCategoryRequested,
    updateCategoryError,
    updateCategoryRequested
} from "../../actions";
import classes from './products-page.module.css';

const CategoriesPage = ({ shopService }) => {
    const isAuthorized = useSelector(state => !!state.userData);
    const isUserPermited = useSelector(getIsPermittedForAdmin);
    const categories = useSelector(state => state.categoriesList);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoriesListRequested());
        shopService.getCategoriesList()
            .then(categories => dispatch(categoriesListLoaded(categories)))
            .catch(error => dispatch(categoriesListError(error)));
    }, [dispatch, shopService]);

    const handleAddCategory = (category) => {
        dispatch(addCategoryRequested());
        shopService.addCategory(category)
            .then(category => dispatch(categoryAdded(category)))
            .catch(error => dispatch(addCategoryError(error)));
    };

    const handleEditCategory = (category) => {
        dispatch(updateCategoryRequested());
        shopService.updateCategory(category)
            .then(category => dispatch(categoryUpdated(category)))
            .catch(error => dispatch(updateCategoryError(error)));
    };

    const handleRemoveCategory = (categoryId) => {
        dispatch(removeCategoryRequested());
        shopService.deleteCategory(categoryId)
            .then(() => dispatch(categoryRemoved(categoryId)))
            .catch(error => dispatch(removeCategoryError(error)));
    };

    const pageContent = isAuthorized && isUserPermited
        ? (<CategoryInfoList
                categories={categories}
                onAddCategory={handleAddCategory}
                onEditCategory={handleEditCategory}
                onRemoveCategory={handleRemoveCategory}
            />)
        : <AccessDenied />;

    return (
        <Grid container className={classes.pageContainer}>
            <Grid item xs={3} />
            <Grid item xs={6}>{pageContent}</Grid>
        </Grid>
    );
};

export default withShopService()(CategoriesPage);