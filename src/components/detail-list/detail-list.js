import React, { useState} from "react";
import { Grid, Button } from "@mui/material";
import DetailListItem from "../detail-list-item";
import { useSelector } from "react-redux";
import { DETAILS } from "../../reducers/constants";
import Spinner from "../spinner";
import DetailFormDialog from "../detail-form-dialog";

const DetailList = ({ details, handleEdit, handleAdd, handleRemove }) => {
    const [open, setOpen] = useState(false);
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

    const loading = useSelector(state => state.loading[DETAILS]);
    if (loading){
        return <Spinner />;
    }
    
    return (
        <>
            <Grid container>
                <Button onClick={() => handleOpen()} variant="outlined" color="success">Add detail</Button>
                { details.map((detail) => <DetailListItem key={detail.id} detail={detail} handleOpen={handleOpen} handleRemove={handleRemove} />)}
            </Grid>
            {open && (<DetailFormDialog
                open={open}
                types={types}
                detail={selectedDetail}
                handleClose={handleClose}
                handleSubmit={selectedDetail ? handleEdit : handleAdd}
            />)}
        </>
    );
};

export default DetailList