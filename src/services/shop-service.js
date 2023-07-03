import * as apiClient from './http-utils';

export default class ShopService {
    _apiUrl = 'https://localhost:7092/api';

    getResource = async (url, token = null) => {
        return await apiClient.getResource(`${this._apiUrl}/${url}`, token);
    };
    
    postResource = async (url, body = null, token = null) => {        
        return await apiClient.postResource(`${this._apiUrl}/${url}`, body, token);
    };
    
    putResource = async (url, body = null, token = null) => {        
        return await apiClient.putResource(`${this._apiUrl}/${url}`, body, token);
    };
    
    deleteResource = async (url, token = null) => {
        return await apiClient.deleteResource(`${this._apiUrl}/${url}`, token);
    };

    getProducts = async (categoryId, params, selectedFilters = {}) => {
        const body = Object.keys(selectedFilters).map(key => ({
            values: selectedFilters[key].map(value => `${value}`),
            detailId: key
        }));
        const response = await this.postResource(`products/category/${categoryId}?` + new URLSearchParams(params), body)
        const jsonData = await response.json();

        return jsonData;
    };

    getCategories = async () => {
        const response = await this.getResource('categories');
        const jsonData = await response.json();

        return jsonData;
    };

    getProduct = async (productId) => {
        const response = await this.getResource(`products/${productId}`);
        const jsonData = await response.json();

        return jsonData;
    };

    getCartItems = async () => {
        const token = localStorage.getItem('token');
        const response = await this.getResource('cart', token);
        const jsonData = await response.json();

        return jsonData;
    };

    addToCart = async (productId) => {
        const token = localStorage.getItem('token');
        const response = await this.postResource(`cart/${productId}`, null, token);
        const jsonData = await response.json();

        return jsonData;
    };

    reduceProductCount = async (productId) => {
        const token = localStorage.getItem('token');
        const response = await this.putResource(`cart/${productId}/reduce`, null, token);
        
        return response;
    };

    removeFromCart = async (productId) => {
        const token = localStorage.getItem('token');
        const response = await this.deleteResource(`cart/${productId}`, token);
        
        return response;
    };

    getUserData = async () => {
        const token = localStorage.getItem('token');
        const response = await this.getResource('cart/user-data', token);
        const jsonData = await response.json();

        return jsonData;
    };

    getDetails = async () => {
        const token = localStorage.getItem('token');
        const response = await this.getResource('details/admin', token);
        const jsonData = await response.json();
        
        return jsonData;
    };

    addDetail = async (detail) => {
        const token = localStorage.getItem('token');
        const response = await this.postResource('details/admin', detail, token);
        const jsonData = await response.json();
        
        return jsonData;
    };

    updateDetail = async (detail) => {
        const token = localStorage.getItem('token');
        const response = await this.putResource('details/admin', detail, token);
        const jsonData = await response.json();

        return jsonData;
    };

    deleteDetail = async (detailId) => {
        const token = localStorage.getItem('token');
        const response = await this.deleteResource(`details/${detailId}/admin`, token);

        return response;
    };

    getCategoriesList = async () => {
        const token = localStorage.getItem('token');
        const response = await this.getResource('categories/admin', token);
        const jsonData = await response.json();
        
        return jsonData;
    };

    addCategory = async (category) => {
        const token = localStorage.getItem('token');
        const response = await this.postResource('categories/admin', category, token);
        const jsonData = await response.json();
        
        return jsonData;
    };

    updateCategory = async (category) => {
        const token = localStorage.getItem('token');
        const response = await this.putResource('categories/admin', category, token);
        const jsonData = await response.json();

        return jsonData;
    };

    deleteCategory = async (categoryId) => {
        const token = localStorage.getItem('token');
        const response = await this.deleteResource(`categories/${categoryId}/admin`, token);

        return response;
    };

    getProductsList = async () => {
        const token = localStorage.getItem('token');
        const response = await this.getResource('products/admin', token)
        const jsonData = await response.json();
        
        return jsonData;
    };

    addProduct = async (product) => {
        const token = localStorage.getItem('token');
        const response = await this.postResource('products/admin', product, token);
        const jsonData = await response.json();
        
        return jsonData;
    };

    updateProduct = async (product) => {
        const token = localStorage.getItem('token');
        const response = await this.putResource('products/admin', product, token);
        const jsonData = await response.json();
        
        return jsonData;
    };

    deleteProduct = async (productId) => {
        const token = localStorage.getItem('token');
        const response = await this.deleteResource(`products/${productId}/admin`, token)
        
        return response;
    };
};