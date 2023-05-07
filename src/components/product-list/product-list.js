import React, { Component } from "react";
import { connect } from "react-redux";

import { withShopService } from "../hoc";
import ProductListItem from "../product-list-item";
import { productsLoaded } from "../../actions";
import { compose } from "../../utils";

class ProductList extends Component {

    componentDidMount() {
        const { shopService } = this.props;
        const data = shopService.getProducts();
        this.props.productsLoaded(data);
    };

    render() {
        const { products } = this.props;

        return (
            <ul>
                {
                    products.map((product) => {
                        return (
                            <li key={product.id}><ProductListItem product={product}/></li>
                        );
                    })
                }
            </ul>
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