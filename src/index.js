/**
 * Created by w4995 on 2017/7/27.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router, Route, Link
} from 'react-router-dom';
import App from './components/App'
ReactDOM.render(
        <Router>
            <App/>
        </Router>,
        document.querySelector('#root')
)