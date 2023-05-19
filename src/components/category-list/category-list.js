import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import { TreeView, TreeItem , useTreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import clsx from "clsx";
import classes from './category-list.module.css';

const ROOT_NODE_KEY = 'root';

const CustomContent = React.forwardRef(function CustomContent(props, ref) {
  const {
    classes,
    className,
    label,
    nodeId,
    expansionIcon,
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
        [classes.expanded]: expanded,
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

class CategoryList extends Component {
  render() {
    const { categories } = this.props;

    if (!categories.length) {
      return null;
    }

    const renderTree = (nodes) => (
      <TreeItem
        classes={{ content: classes.item }}
        key={nodes.id}
        nodeId={nodes.id}
        label={nodes.name}
        ContentComponent={CustomContent} >
        {(nodes.children?.length)
          ? nodes.children.map(renderTree)
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
        >
          { categories.map(renderTree) }
        </TreeView>
      </Grid>     
    );
  };
};

export default CategoryList;