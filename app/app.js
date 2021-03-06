import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import styles from './assets/scss/style.scss';

import TrippingSite from './assets/images/bbc-situ.jpg';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);
