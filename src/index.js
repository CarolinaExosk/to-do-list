import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* Envolva o <App /> com o <Provider> */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);