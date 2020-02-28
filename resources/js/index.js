import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';
import { BrowserRouter } from 'react-router-dom';

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('app'));
}
