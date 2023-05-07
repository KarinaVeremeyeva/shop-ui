import React, { Component } from "react";

import { withShopService } from "../hoc";
import ProductListItem from "../product-list-item";

class ProductList extends Component {
    render() {
        const { shopService } = this.props;
        const products = shopService.getProducts();

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

export default withShopService()(ProductList);