/**
 * Created by yuluo on 15/12/25.
 */

import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import {createHistory} from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import { Router,Route } from 'react-router'

import ArticlesApp from './containers/articls'
import Home from './containers/home'
import ArticleDetailsApp from './containers/article_details'

import BlogNewApp from './containers/blog_new'

const store = configureStore();


const history = createHistory();

syncReduxAndRouter(history, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Home}>
                <Route path="/" component={ArticlesApp}></Route>
                <Route path="article_detail" component={ArticleDetailsApp}></Route>
                <Route path="blog_new" component={BlogNewApp}></Route>
            </Route>
        </Router>

    </Provider>,
    document.getElementById('app')
);