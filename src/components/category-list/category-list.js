import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { TreeView, TreeItem , useTreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import clsx from "clsx";
import classes from './category-list.module.css';
import Spinner from "../spinner";
import { CATEGORIES } from "../../reducers/constants";

const ROOT_NODE_KEY = 'root';

const CustomContent = React.forwardRef(function CustomContent(props, ref) {
    const {
        classes,
        className,
        label,
        nodeId,
        expansionIcon
    } = props;

    const {
        expanded,
        handleExpansion,
        preventSelection,
    } = useTreeItem(nodeId);

    const titleComponent = nodeId === ROOT_NODE_KEY 
        ? label
        : (
            <Link to={`/products/category/${nodeId}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                {label}
            </Link>
        );

    return (
        <div
            className={clsx(className, classes.root, {
                [classes.expanded]: expanded
            })}
            onMouseDown={preventSelection}
            ref={ref}
        >
            <div onClick={handleExpansion} className={classes.iconContainer}>
                {expansionIcon}
            </div>
            {titleComponent}
        </div>
    );
});

const getPath = (categories, categoryId) => {
    for (let category of categories) {
        if (category.id === categoryId) {
            return [category.id];
        }

        const categoryPath = getPath(category.childCategories, categoryId);
        if (categoryPath.length) {
            return [category.id, ...categoryPath];
        }
    }

    return [];
}

const CategoryList = ({ categories, currentCategoryId }) => {
    const [expanded, setExpanded] = useState([]);
    const loading = useSelector(state => state.loading[CATEGORIES]);

    useEffect(() => {
        if (!expanded.length && currentCategoryId && categories?.length) {
            const pathToCategory = getPath(categories, currentCategoryId);
            setExpanded(pathToCategory);
        }
    }, [currentCategoryId, categories, expanded, setExpanded])

    if (loading) {
        return <Spinner />;
    }

    if (!categories.length) {
        return null;
    }

    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    const renderTree = (category) => (
        <TreeItem
            classes={{ content: classes.treeItem }}
            key={category.id}
            nodeId={category.id}
            label={category.name}
            ContentComponent={CustomContent}
        >
            {(category.childCategories?.length)
                ? category.childCategories.map(renderTree)
                : null}
        </TreeItem>
    );

    return (
        <Grid item>
            <TreeView
                aria-label="rich object"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpanded={[ROOT_NODE_KEY]}
                defaultExpandIcon={<ChevronRightIcon />}
                expanded={expanded}
                onNodeToggle={handleToggle}
            >
                { categories.map(renderTree) }
            </TreeView>
        </Grid>
    );
};

export default CategoryList;