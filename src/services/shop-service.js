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
    };

    getProduct = async (productId) => {
        const data = await this.getResource(`products/${productId}`);
        return data;
    };

    getCartItems = async () => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${this._apiUrl}/cart`, {
            headers: {
                'Authorization': token
            }
        });
        const jsonData = await response.json();

        return jsonData;
    };

    addToCart = async (productId) => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${this._apiUrl}/cart/${productId}`, {
            method: 'POST',
            headers: {
                'Authorization': token
            }
        });
        if (!response.ok) {
            throw new Error(`Could not fetch ${this._apiUrl}/cart/${productId}, received ${response.status}`);
        }
        
        return await response.json();
    }

    reduceProductCount = async (productId) => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${this._apiUrl}/cart/${productId}/reduce`, {
            method: 'PUT',
            headers: {
                'Authorization': token
            }
        });
        if (!response.ok) {
            throw new Error(`Could not fetch ${this._apiUrl}/cart/${productId}/reduce, received ${response.status}`);
        }
        
        return response;
    }

    removeFromCart = async (productId) => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${this._apiUrl}/cart/${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': token
            }
        });
        if (!response.ok) {
            throw new Error(`Could not fetch ${this._apiUrl}/cart/${productId}, received ${response.status}`);
        }
        
        return response;
    }

    getUserData = async () => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${this._apiUrl}/cart/user-data`, {
            headers: {
                'Authorization': token
            }
        });

        return await response.json();
    };
};