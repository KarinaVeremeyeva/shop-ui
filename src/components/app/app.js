import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, ProductsPage } from "../pages";
import Header from "../header";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
            </Routes>
        </div>
    );
};

export default App;