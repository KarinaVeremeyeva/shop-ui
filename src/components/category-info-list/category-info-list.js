import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import CategoryInfoListItem from "./category-info-list-item/category-info-list-item";
import CategoryFormDialog from "./category-form-dialog";
import ConfirmDialog from "../dialogs/confirm-dialog";
import Spinner from "../spinner";
import { CATEGORIES_LIST } from "../../reducers/constants";
import { getChildren } from "./get-children";
import classes from './category-info-list.module.css';

const CategoryInfoList = ({ categories, onEditCategory, onAddCategory, onRemoveCategory }) => {
    const [open, setOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();
    const [availableParents, setAvailableParents] = useState([]);

    const loading = useSelector(state => state.admin.loading[CATEGORIES_LIST]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (categoryId) => {
        const category = categories.find(c => c.id === categoryId);
        setSelectedCategory(category);
        if (categoryId) {
            const categoryChildren = getChildren(categories, categoryId);
            const availableParents = categories.filter(c => !categoryChildren.includes(c));
            setAvailableParents(availableParents);
        }
        else {
            setAvailableParents(categories);
        }
        
        setOpen(true);
    };

    const handleCloseConfirm = () => {
        setOpenConfirm(false);
    };

    const handleOpenConfirm = (categoryId) => {
        const category = categories.find(c => c.id === categoryId);
        setSelectedCategory(category);
        setOpenConfirm(true);
    };

    const handleOnRemove = (categoryId) => {
        onRemoveCategory(categoryId);
        handleCloseConfirm();
    };

    const handleOnUpdate = (category) => {
        const handleUpdate = selectedCategory ? onEditCategory : onAddCategory;
        handleUpdate(category);
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
                    className={classes.btnWrapper}
                    color="success"
                >
                    Add category
                </Button>
                {
                    categories.map((category) => (
                        <CategoryInfoListItem
                            key={category.id}
                            category={category}
                            onOpen={handleOpen}
                            onOpenConfirm={handleOpenConfirm}
                            categories={categories}
                        />
                    ))
                }
            </Grid>
            {open && (
                <CategoryFormDialog
                    open={open}
                    allCategories={availableParents}
                    category={selectedCategory}
                    onClose={handleClose}
                    onSubmit={handleOnUpdate}
                />
            )}
            {openConfirm && (
                <ConfirmDialog
                    open={openConfirm}
                    onClose={handleCloseConfirm}
                    onSubmit={() => handleOnRemove(selectedCategory.id)}
                    title={"Confirm category deleting"}
                >
                    Are you sure you want to delete a category "{selectedCategory.name}"?
                </ConfirmDialog>
            )}
        </>
    );
};

export default CategoryInfoList;