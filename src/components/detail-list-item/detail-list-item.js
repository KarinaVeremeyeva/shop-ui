import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const displayDetailType = (type) => {
    switch (type) {
        case 0: return 'String';
        case 1: return 'Number';
        case 2: return 'Boolean';
        default: return null
    }
};

const DetailListItem = ({ detail, handleOpen }) => {
    const { id, name, type } = detail;

    const handleRemoveDetail = (detailId) => {
        console.log(detail.id)
    };

    const handleUpdateDetail = () => {
        handleOpen(id);
        console.log(id);
    };

    return (
        <Grid item xs={12}>
            <Card>
                <CardContent>
                    <div>{name}</div>
                    <div>{displayDetailType(type)}</div>
                    <div>
                        <Button
                            onClick={() => handleRemoveDetail(detail.id)}
                            variant="outlined"
                            color="error"
                            startIcon={<DeleteIcon />}
                        />
                        <Button
                            onClick={() => handleUpdateDetail(detail)}
                            variant="outlined"
                            color="warning"
                            startIcon={<EditIcon />}
                        />
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default DetailListItem;