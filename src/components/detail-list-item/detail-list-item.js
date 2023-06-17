import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import classes from './detail-list-item.module.css';

const displayDetailType = (type) => {
    switch (type) {
        case 0: return 'String';
        case 1: return 'Number';
        case 2: return 'Boolean';
        default: return null
    }
};

const DetailListItem = ({ detail, handleOpen, handleOpenConfirm }) => {
    const { id, name, type } = detail;

    const handleUpdateDetail = () => {
        handleOpen(id);
    };

    const handleRemoveDetail = () => {
        handleOpenConfirm(id);
    };

    return (
        <Grid item xs={12} className={classes.detailItem}>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={9}>
                            <div>{name}</div>
                            <div>{displayDetailType(type)}</div>
                        </Grid>
                        <Grid item xs={3} classes={{ root: classes.gridItemWrapper}}>
                            <div className={classes.btnContainer}>
                                <Button
                                    onClick={() => handleRemoveDetail(id)}
                                    variant="outlined"
                                    color="error"
                                    classes={{ startIcon: classes.btnIcon, root: classes.btnWrapper}}
                                    startIcon={<DeleteIcon />}
                                />
                                <Button
                                    onClick={() => handleUpdateDetail(detail)}
                                    variant="outlined"
                                    color="warning"
                                    classes={{ startIcon: classes.btnIcon}}
                                    startIcon={<EditIcon />}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default DetailListItem;