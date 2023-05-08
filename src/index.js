import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import ShopService from './services/shop-service';
import { ShopServiceProvider} from './components/shop-service-context';
import CssBaseline from '@mui/material/CssBaseline';

const shopService = new ShopService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <CssBaseline />
    <ErrorBoundry>
      <ShopServiceProvider value={shopService}>
        <Router>
          <App />
        </Router>
      </ShopServiceProvider>
    </ErrorBoundry>
  </Provider>
);