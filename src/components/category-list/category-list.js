import React, { Component } from "react";
import { connect } from "react-redux";
import { TreeView, TreeItem , useTreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Grid } from "@mui/material";

import { withShopService } from "../hoc";
import { categoriesLoaded } from "../../actions";
import { compose } from "../../utils";
import { Link } from "react-router-dom";
import clsx from "clsx";

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
    : <Link to={`/products/category/${nodeId}`} 
        style={{ textDecoration: 'none', color: 'inherit'}}>{label}</Link>;

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
  componentDidMount() {
    const { shopService } = this.props;
    const categories = shopService.getCategories()
    this.props.categoriesLoaded(categories)
  };

  render() {
    const { categories } = this.props;

    if (!categories.length) {
      return null;
    }

    const renderTree = (nodes) => (
      <TreeItem
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

const mapStateToProps = ({ categories }) => {
    return { categories };
};

const mapDispatchToProps = (dispatch) => ({
    categoriesLoaded: (categories) => {
      dispatch(categoriesLoaded(categories))
    }
}); 

export default compose(
    withShopService(),
    connect(mapStateToProps, mapDispatchToProps),
)(CategoryList);