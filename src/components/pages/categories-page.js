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
} from "../../actions/admin-actions";
import { CATEGORIES_LIST, USER_DATA } from "../../reducers/constants";
import Spinner from "../spinner";
import classes from './pages.module.css';

const CategoriesPage = ({ shopService }) => {
    const isAuthorized = useSelector(state => !!state.user.userData);
    const isUserPermited = useSelector(getIsPermittedForAdmin);
    const categories = useSelector(state => state.admin.categoriesList);
    const loading = useSelector(state => state.admin.loading[CATEGORIES_LIST] || state.user.loading[USER_DATA]);

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

    if (loading) {
        return <Spinner />;
    }
    
    const pageContent = isAuthorized && isUserPermited
        ? (
            <CategoryInfoList
                categories={categories}
                onAddCategory={handleAddCategory}
                onEditCategory={handleEditCategory}
                onRemoveCategory={handleRemoveCategory}
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

export default withShopService()(CategoriesPage);