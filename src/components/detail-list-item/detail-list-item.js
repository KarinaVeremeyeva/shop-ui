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

const DetailListItem = ({ detail, handleOpen, handleRemove }) => {
    const { id, name, type } = detail;

    const handleUpdateDetail = () => {
        handleOpen(id);
    };

    return (
        <Grid item xs={12} className={classes.detailItem}>
            <Card>
                <CardContent>
                    <div>{name}</div>
                    <div>{displayDetailType(type)}</div>
                    <div>
                        <Button
                            onClick={() => handleRemove(id)}
                            variant="outlined"
                            color="error"
                            classes={{ startIcon: classes.buttonIcon}}
                            startIcon={<DeleteIcon />}
                        />
                        <Button
                            onClick={() => handleUpdateDetail(detail)}
                            variant="outlined"
                            color="warning"
                            classes={{ startIcon: classes.buttonIcon}}
                            startIcon={<EditIcon />}
                        />
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default DetailListItem;