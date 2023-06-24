import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../header";
import {
    HomePage,
    ProductDetailsPage,
    ProductsPage,
    AuthPage,
    CartPage,
    DetailsPage,
    CategoriesPage,
    ProductsInfoPage
} from "../pages";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/category/:categoryId" element={<ProductsPage />} />
                <Route path="/products/:productId" element={<ProductDetailsPage />} />
                <Route path="/accounts/login" element={<AuthPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/details/admin" element={<DetailsPage />} />
                <Route path="/categories/admin" element={<CategoriesPage />} />
                <Route path="/products/admin" element={<ProductsInfoPage />} />
            </Routes>
        </div>
    );
};

export default App;