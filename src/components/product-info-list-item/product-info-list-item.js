import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import classes from './product-info-list-item.module.css';

const ProductInfoListItem = ({ product, onOpen, onOpenConfirm }) => {
    const { id, name, description, category: { name: categoryName } } = product;
    
    const handleUpdateProduct = () => {
        onOpen(id);
    };

    const handleRemoveProduct = () => {
        onOpenConfirm(id)
    }

    return (
        <Grid item xs={12} className={classes.productItem}>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={9}>
                            <div>{name}</div>
                            <div>{description}</div>
                            <div>{categoryName}</div>
                        </Grid>
                        <Grid item xs={3} classes={{ root: classes.gridItemWrapper }}>
                            <div className={classes.btnContainer}>
                                <Button
                                    onClick={handleRemoveProduct}
                                    variant="outlined"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    classes={{ startIcon: classes.btnIcon, root: classes.btnWrapper }}
                                />
                                <Button
                                    onClick={handleUpdateProduct}
                                    variant="outlined"
                                    color="warning"
                                    startIcon={<EditIcon />}
                                    classes={{ startIcon: classes.btnIcon }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ProductInfoListItem;