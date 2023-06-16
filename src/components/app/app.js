import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, ProductDetailsPage, ProductsPage, AuthPage, CartPage, AdminPage } from "../pages";
import Header from "../header";

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
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </div>
    );
};

export default App;