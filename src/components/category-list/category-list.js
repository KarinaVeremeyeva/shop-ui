import React, { Component } from "react";
import { connect } from "react-redux";
import { TreeView, TreeItem , useTreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Grid, Link, Typography } from "@mui/material";

import { withShopService } from "../hoc";
import { categoriesLoaded } from "../../actions";
import { compose } from "../../utils";

const CustomContent = React.forwardRef(function CustomContent(props, ref) {
  const {
    classes,
    className,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon,
  } = props;

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection,
  } = useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  const handleMouseDown = (event) => {
    preventSelection(event);
  };

  const handleExpansionClick = (event) => {
    handleExpansion(event);
  };

  const handleSelectionClick = (event) => {
    handleSelection(event);
  };

  return (
    <div
      // className={clsx(className, classes.root, {
      //   [classes.expanded]: expanded,
      //   [classes.selected]: selected,
      //   [classes.focused]: focused,
      //   [classes.disabled]: disabled,
      // })}
      onMouseDown={handleMouseDown}
      ref={ref}
    >
      <div onClick={handleExpansionClick} className={classes.iconContainer}>
        {icon}
      </div>
      <Link to={`/products/category/${0}`}>
          {label}
        </Link> 
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
          ? nodes.children.map((node) => renderTree(node))
          : null}
        </TreeItem>
      );
  
    return (
      <Grid item>
        <TreeView
          aria-label="rich object"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={['root']}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {
            categories.map((category) => renderTree(category))
          }
        </TreeView>
        <Link to={`/products/category/${0}`}>
          {"hhhh"}
        </Link> 
      </Grid>     
    );
  };
};

const mapStateToProps = ({ categories }) => {
    return { categories };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoriesLoaded: (categories) => {
      dispatch(categoriesLoaded(categories))
    }
  }
};

export default compose(
    withShopService(),
    connect(mapStateToProps, mapDispatchToProps),
)(CategoryList);