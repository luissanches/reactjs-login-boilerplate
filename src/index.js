import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={LoginPage} />
            <Route path="/main" component={MainPage} />
        </div>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
