import React, { useState} from "react";
import { useSelector } from "react-redux";
import { Grid, Button } from "@mui/material";
import DetailListItem from "../detail-list-item";
import { DETAILS } from "../../reducers/constants";
import Spinner from "../spinner";
import DetailFormDialog from "../dialogs/detail-form-dialog";
import ConfirmDialog from "../dialogs/confirm-dialog";
import { types } from './detail-types';
import classes from './detail-list.module.css';

const DetailList = ({ details, onEditDetail, onAddDetail, onRemoveDetail }) => {
    const [open, setOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [selectedDetail, setSelectedDetail] = useState();
    const loading = useSelector(state => state.admin.loading[DETAILS]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (detailId) => {
        const detail = details.find(d => d.id === detailId);
        setSelectedDetail(detail);
        setOpen(true);
    };

    const handleCloseConfirm = () => {
        setOpenConfirm(false);
    };

    const handleOpenConfirm = (detailId) => {
        const detail = details.find(d => d.id === detailId);
        setSelectedDetail(detail);
        setOpenConfirm(true);
    };

    const handleOnRemove = (detailId) => {
        onRemoveDetail(detailId);
        handleCloseConfirm();
    };

    const handleOnUpdate = (detail) => {
        const handleUpdate = selectedDetail ? onEditDetail : onAddDetail;
        handleUpdate(detail);
        handleClose();
    };

    if (loading){
        return <Spinner />;
    }
    
    return (
        <>
            <Grid container>
                <Button
                    onClick={() => handleOpen()}
                    variant="outlined"
                    color="success"
                    className={classes.btnWrapper}
                >
                    Add detail
                </Button>
                {
                    details.map((detail) => (
                        <DetailListItem
                            key={detail.id}
                            detail={detail}
                            onOpen={handleOpen}
                            onOpenConfirm={handleOpenConfirm}
                        />
                    ))
                }
            </Grid>
            {open && (
                <DetailFormDialog
                    open={open}
                    types={types}
                    detail={selectedDetail}
                    onClose={handleClose}
                    onSubmit={handleOnUpdate}
                />
            )}
            {openConfirm && (
                <ConfirmDialog
                    open={openConfirm}
                    onClose={handleCloseConfirm}
                    onSubmit={() => handleOnRemove(selectedDetail.id)}
                    title="Confirm detail deleting"
                >
                    Are you sure you want to delete a detail "{selectedDetail.name}"?
                </ConfirmDialog>
            )}
        </>
    );
};

export default DetailList