import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { withShopService } from "../hoc";
import CategoryInfoList from "../category-info-list";
import AccessDenied from "../access-denied";
import { getIsPermittedForAdmin } from "../../selectors/selectors";
import { fetchCategoriesList, addCategory, updateCategory, deleteCategory } from "../../actions/admin-actions";
import { CATEGORIES_LIST, USER_DATA } from "../../reducers/constants";
import Spinner from "../spinner";
import classes from './pages.module.css';

const CategoriesPage = ({ shopService }) => {
    const isAuthorized = useSelector(state => !!state.userData.userData);
    const isUserPermited = useSelector(getIsPermittedForAdmin);
    const categories = useSelector(state => state.admin.categoriesList);
    const loading = useSelector(state => state.admin.loading[CATEGORIES_LIST] || state.user.loading[USER_DATA]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesList(shopService));
    }, [dispatch, shopService]);

    const handleAddCategory = (category) => {
        dispatch(addCategory(shopService, category));
    };

    const handleEditCategory = (category) => {
        dispatch(updateCategory(shopService, category));
    };

    const handleRemoveCategory = (categoryId) => {
        dispatch(deleteCategory(shopService, categoryId));
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