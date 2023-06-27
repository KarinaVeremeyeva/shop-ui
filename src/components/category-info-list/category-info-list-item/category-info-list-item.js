import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import classes from './category-info-list-item.module.css';

const CategoryInfoListItem = ({ category, onOpen, onOpenConfirm, categories }) => {
    const { id, name, description, parentCategoryId } = category;
    const parentCategory = categories.find(c => c.id === parentCategoryId);
    
    const handleUpdateCategory = () => {
        onOpen(id);
    };

    const handleRemoveCategory = () => {
        onOpenConfirm(id);
    };

    return (
        <Grid item xs={12} className={classes.categoryItem}>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={9}>
                            <div>{name}</div>
                            <Typography variant="body2">{parentCategory?.name}</Typography>
                            <Typography variant="body2">{description}</Typography>
                        </Grid>
                        <Grid item xs={3} classes={{ root: classes.gridItemWrapper }}>
                            <div className={classes.btnContainer}>
                                <Button
                                    onClick={handleRemoveCategory}
                                    variant="outlined"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    classes={{ startIcon: classes.btnIcon, root: classes.btnWrapper }}
                                />
                                <Button
                                    onClick={handleUpdateCategory}
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

export default CategoryInfoListItem;