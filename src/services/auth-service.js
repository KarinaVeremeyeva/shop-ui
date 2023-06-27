export default class AuthService {
    _apiUrl = 'https://localhost:7017/api';

    login = async (username, password) => {
        const response = await fetch(`${this._apiUrl}/accounts/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        });
        
        if (!response.ok) {
            throw new Error(`Could not fetch ${this._apiUrl}/accounts/login, received ${response.status}`);
        }

        const token = response.headers.get('Authorization');
        if (token) {
            localStorage.setItem('token', token);
        }

        return response;
    }

    logout = async () => {
        const response = await fetch(`${this._apiUrl}/accounts/logout`);
        if (!response.ok) {
            throw new Error(`Could not fetch ${this._apiUrl}/accounts/logout, received ${response.status}`);
        }
        
        localStorage.removeItem("token")
    };
}