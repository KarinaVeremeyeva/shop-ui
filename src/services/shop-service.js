export default class ShopService {
    _apiUrl = 'https://localhost:7092/api';
    
    getResource = async (url) => {
        const response = await fetch(`${this._apiUrl}/${url}`);
        if (!response.ok) {
            throw new Error(`Could not fetch ${this._apiUrl}/${url}, received ${response.status}`);
        }
        
        const jsonData = await response.json();

        return jsonData;
    };

    getProducts = async (categoryId) => {
        const data = await this.getResource(`products/category/${categoryId}`);
        return data;
    };

    getCategories = async () => {
        const data = await this.getResource(`categories`);
        return data;
    }

    getProduct = async (productId) => {
        const data = await this.getResource(`products/${productId}`);
        return data;
    };

    getUserData = () => {
        return {
            email: "user1@gmail.com",
            role: "User"
        };
    };
};