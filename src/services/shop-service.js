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

    getProducts = async (categoryId, params, selectedFilters = {}) => {
        const body = Object.keys(selectedFilters).map(key => ({
            values: selectedFilters[key].map(value => `${value}`),
            detailId: key
        }));
        const response = await fetch(`${this._apiUrl}/products/category/${categoryId}?` + new URLSearchParams(params), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        const jsonData = await response.json();

        return jsonData;
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

    getDetails = async () => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${this._apiUrl}/details/admin`, {
            headers: {
                'Authorization': token
            }
        });

        const jsonData = await response.json();
        
        return jsonData;
    };

    addDetail = async (detail) => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${this._apiUrl}/details/admin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(detail)
        });

        const jsonData = await response.json();
        
        return jsonData;
    };

    updateDetail = async (detail) => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${this._apiUrl}/details/admin`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(detail)
        });

        const jsonData = await response.json();
        return jsonData;
    };

    deleteDetail = async (detailId) => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${this._apiUrl}/details/${detailId}/admin`, {
            method: 'DELETE',
            headers: {
                'Authorization': token,
            }
        });

        return response;
    };

    getCategoriesList = async () => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${this._apiUrl}/categories/admin`, {
            headers: {
                'Authorization': token
            }
        });

        const jsonData = await response.json();
        
        return jsonData;
    };

    addCategory = async (category) => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${this._apiUrl}/categories/admin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(category)
        });

        const jsonData = await response.json();
        
        return jsonData;
    };

    updateCategory = async (category) => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${this._apiUrl}/categories/admin`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(category)
        });

        const jsonData = await response.json();
        return jsonData;
    };

    deleteCategory = async (categoryId) => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${this._apiUrl}/categories/${categoryId}/admin`, {
            method: 'DELETE',
            headers: {
                'Authorization': token,
            }
        });

        return response;
    };
};