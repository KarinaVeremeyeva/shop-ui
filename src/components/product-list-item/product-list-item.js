import React, { Fragment } from "react";

const ProductListItem = ({ product }) => {
    const { name, price, category } = product;
    return (
        <Fragment>
            <span>{name}</span>
            <span>{price}</span>
            <span>{category}</span>
        </Fragment>
    );
};

export default ProductListItem;