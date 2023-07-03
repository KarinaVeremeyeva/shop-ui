import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getIsPermittedForAdmin } from "../../selectors/selectors";
import { withShopService } from "../hoc";
import DetailList from "../detail-list";
import AccessDenied from "../access-denied";
import { fetchDetails, addDetail, updateDetail, deleteDetail } from "../../actions/admin-actions";
import Spinner from "../spinner";
import { DETAILS, USER_DATA } from "../../reducers/constants";
import classes from './pages.module.css';

const DetailsPage = ({ shopService }) => {
    const isAuthorized = useSelector(state => !!state.userData.userData);
    const isUserPermited = useSelector(getIsPermittedForAdmin);
    const loading = useSelector(state => state.admin.loading[DETAILS] || state.user.loading[USER_DATA]);
    const details = useSelector(state => state.admin.details);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDetails(shopService));
    }, [dispatch, shopService]);

    const handleAddDetail = (detail) => {
        dispatch(addDetail(shopService, detail));
    };

    const handleEditDetail = (detail) => {
        dispatch(updateDetail(shopService, detail));
    };

    const handleRemoveDetail = (detailId) => {
        dispatch(deleteDetail(shopService, detailId));
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