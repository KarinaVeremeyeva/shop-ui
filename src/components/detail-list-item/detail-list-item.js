import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { types } from '../detail-list/detail-types';
import classes from './detail-list-item.module.css';

const displayDetailType = (type) => {
    const typeName = types.find(t => t.value === type).name;
    return typeName;
};

const DetailListItem = ({ detail, onOpen, onOpenConfirm }) => {
    const { id, name, type } = detail;

    const handleUpdateDetail = () => {
        onOpen(id);
    };

    const handleRemoveDetail = () => {
        onOpenConfirm(id);
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
                                    onClick={handleRemoveDetail}
                                    variant="outlined"
                                    color="error"
                                    classes={{ startIcon: classes.btnIcon, root: classes.btnWrapper}}
                                    startIcon={<DeleteIcon />}
                                />
                                <Button
                                    onClick={handleUpdateDetail}
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