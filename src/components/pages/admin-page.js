import React from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getIsPermittedForAdmin } from "../../selectors/selectors";
import { withShopService } from "../hoc";
import DetailList from "../detail-list";
import AccessDenied from "../access-denied";
import CategoryList from "../category-list";
import classes from './products-page.module.css';
import { useEffect } from "react";
import { detailsError, detailsLoaded, detailsRequested } from "../../actions";

const AdminPage = ({ shopService }) => {
    const isAuthorized = useSelector(state => !!state.userData);
    const isUserPermited = useSelector(getIsPermittedForAdmin);
    const categories = useSelector(state => state.categories);
    const details = useSelector(state => state.details);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsRequested());
        shopService.getDetails()
            .then(details => dispatch(detailsLoaded(details)))
            .catch((error => dispatch(detailsError(error))))
    }, [dispatch, shopService]);

    const handleAddDetail = () => { console.log('click')};

    const handleEditDetail = () => { console.log('click')};

    const pageContent = isAuthorized && isUserPermited
        ? <DetailList details={details} handleAdd={handleAddDetail} handleEdit={handleEditDetail} />
        : <AccessDenied />;

    return (
        <Grid container className={classes.pageContainer}>
            <Grid item xs={3}>
                <CategoryList categories={categories} />
            </Grid>
            <Grid item xs={6}>{pageContent}</Grid>
        </Grid>
    );
};

export default withShopService()(AdminPage);