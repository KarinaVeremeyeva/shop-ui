import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getIsPermittedForAdmin } from "../../selectors/selectors";
import { withShopService } from "../hoc";
import DetailList from "../detail-list";
import AccessDenied from "../access-denied";
import classes from './products-page.module.css';
import {
    detailsLoaded,
    detailsRequested,
    detailsError,
    addDetailRequested,
    detailAdded,
    addDetailError,
    updateDetailRequested,
    detailUpdated,
    updateDetailError,
    removeDetailRequested,
    removeDetailError,
    detailRemoved
} from "../../actions";
import Spinner from "../spinner";
import { DETAILS, USER_DATA } from "../../reducers/constants";

const DetailsPage = ({ shopService }) => {
    const isAuthorized = useSelector(state => !!state.userData);
    const isUserPermited = useSelector(getIsPermittedForAdmin);
    const loading = useSelector(state => state.loading[DETAILS] || state.loading[USER_DATA]);
    const details = useSelector(state => state.details);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsRequested());
        shopService.getDetails()
            .then(details => dispatch(detailsLoaded(details)))
            .catch((error => dispatch(detailsError(error))));
    }, [dispatch, shopService]);

    const handleAddDetail = (detail) => {
        dispatch(addDetailRequested());
        shopService.addDetail(detail)
            .then(detail => dispatch(detailAdded(detail)))
            .catch(error => dispatch(addDetailError(error)));
    };

    const handleEditDetail = (detail) => {
        dispatch(updateDetailRequested());
        shopService.updateDetail(detail)
            .then(detail => dispatch(detailUpdated(detail)))
            .catch(error => dispatch(updateDetailError(error)));
    };

    const handleRemoveDetail = (detailId) => {
        dispatch(removeDetailRequested());
        shopService.deleteDetail(detailId)
            .then(() => dispatch(detailRemoved(detailId)))
            .catch(error => dispatch(removeDetailError(error)));
    };

    if (loading) {
        return <Spinner />;
    }

    const pageContent = isAuthorized && isUserPermited
        ? <DetailList details={details} onAddDetail={handleAddDetail} onEditDetail={handleEditDetail} onRemoveDetail={handleRemoveDetail}/>
        : <AccessDenied />;

    return (
        <Grid container className={classes.pageContainer}>
            <Grid item xs={3} />
            <Grid item xs={6}>{pageContent}</Grid>
        </Grid>
    );
};

export default withShopService()(DetailsPage);