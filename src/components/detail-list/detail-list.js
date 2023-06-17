import React, { useState} from "react";
import { Grid, Button } from "@mui/material";
import DetailListItem from "../detail-list-item";
import { useSelector } from "react-redux";
import { DETAILS } from "../../reducers/constants";
import Spinner from "../spinner";
import DetailFormDialog from "../detail-form-dialog";
import ConfirmDialog from "../confirm-dialog";
import classes from './detail-list.module.css';

const DetailList = ({ details, onEditDetail, onAddDetail, onRemoveDetail }) => {
    const [open, setOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [selectedDetail, setSelectedDetail] = useState();
    
    const types = [
        { name: 'string', value: 0 },
        { name: 'number', value: 1 },
        { name: 'boolean', value: 2 }
    ];

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
    }

    const loading = useSelector(state => state.loading[DETAILS]);
    if (loading){
        return <Spinner />;
    }
    
    return (
        <>
            <Grid container>
                <Button onClick={() => handleOpen()} variant="outlined" color="success" className={classes.btnWrapper}>Add detail</Button>
                {details.map((detail) => <DetailListItem key={detail.id} detail={detail} handleOpen={handleOpen} handleOpenConfirm={handleOpenConfirm} />)}
            </Grid>
            {open && (<DetailFormDialog
                open={open}
                types={types}
                detail={selectedDetail}
                handleClose={handleClose}
                handleSubmit={handleOnUpdate}
            />)}
            {openConfirm && (<ConfirmDialog
                open={openConfirm}
                handleClose={handleCloseConfirm}
                handleSubmit={() => handleOnRemove(selectedDetail.id)}
                title="Confirm detail deleting"
            >
                Are you sure you want to delete a detail "{selectedDetail.name}"?
            </ConfirmDialog>)}
        </>
    );
};

export default DetailList