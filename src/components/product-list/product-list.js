import React, { Component } from "react";
import { connect } from "react-redux";

import { withShopService } from "../hoc";
import ProductListItem from "../product-list-item";
import { productsLoaded } from "../../actions";
import { compose } from "../../utils";
import { Grid } from "@mui/material";

class ProductList extends Component {

    componentDidMount() {
        const { shopService } = this.props;
        const data = shopService.getProducts();
        this.props.productsLoaded(data);
    };

    render() {
        const { products } = this.props;

        return (
            <Grid container spacing={3}>
                {
                    products.map((product) => {
                        return (
                            <ProductListItem key={product.id} product={product}/>
                        );
                    })
                }
            </Grid>
        );
    };
};

const mapStateToProps = ({ products }) => {
    return { products };
}

const mapDispatchToProps = {
    productsLoaded
};

export default compose(
    withShopService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductList);