import React, { Component } from "react";
import { connect } from "react-redux";
import { TreeView, TreeItem} from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Grid } from "@mui/material";

import { withShopService } from "../hoc";
import { categoriesLoaded } from "../../actions";
import { compose } from "../../utils";

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
      <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
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
    connect(mapStateToProps, mapDispatchToProps)
)(CategoryList);