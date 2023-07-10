import * as apiClient from './http-utils';

export default class AuthService {
    _apiUrl = 'http://localhost:5001/api';

    login = async (username, password) => {
        const response = await apiClient.postResource(
            `${this._apiUrl}/accounts/login`,
            { username, password }
        );

        const token = response.headers.get('Authorization');
        if (token) {
            localStorage.setItem('token', token);
        }

        return response;
    }

    logout = async () => {
        const token = localStorage.getItem('token');
        await apiClient.getResource(`${this._apiUrl}/accounts/logout`, token);
        
        localStorage.removeItem('token');
    };
}