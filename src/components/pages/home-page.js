import React from "react";
import ProductList from "../product-list";

const HomePage = () => {
    const products = [
        {
            id: 1,
            name:  'Product 1',
            price: 100,
            category: 'Category 1'
        },
        {
            id: 2,
            name:  'Product 2',
            price: 20,
            category: 'Category 2'
        },
        {
            id: 3,
            name:  'Product 3',
            price: 45,
            category: 'Category 3'
        },
    ];
    return <ProductList products={products} >Home Page</ProductList>
};

export default HomePage;