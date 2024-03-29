import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import ShopService from './services/shop-service';
import { ShopServiceProvider} from './contexts/shop-service-context';
import CssBaseline from '@mui/material/CssBaseline';
import AuthService from './services/auth-service';
import { AuthServiceProvider } from './contexts/auth-service-context';
import LoadingData from './components/loading-data';

const shopService = new ShopService();
const authService = new AuthService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <CssBaseline />
        <ErrorBoundry>
            <AuthServiceProvider value={authService}>
                <ShopServiceProvider value={shopService}>
                    <LoadingData>
                        <Router>
                            <App />
                        </Router>
                    </LoadingData>
                </ShopServiceProvider>
            </AuthServiceProvider>
        </ErrorBoundry>
    </Provider>
);