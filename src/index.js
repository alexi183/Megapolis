import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import ProductPage from './container/Posts/Posts';
import store from './stores/store';
import 'bootstrap/dist/css/bootstrap.min.css';

let root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
       <ProductPage />
    </Provider>
    , root
);







