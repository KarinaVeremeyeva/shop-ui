import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { TreeView, TreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Spinner from "../spinner";
import { CATEGORIES } from "../../reducers/constants";
import CustomContent from "./custom-content";
import { getPath } from "./helpers";
import classes from './category-list.module.css';

const ROOT_NODE_KEY = 'root';

const CategoryList = ({ categories, currentCategoryId }) => {
    const [expanded, setExpanded] = useState([]);
    const loading = useSelector(state => state.shop.loading[CATEGORIES]);

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