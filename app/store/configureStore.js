/**
 * Created by yuluo on 15/12/25.
 */
import {createStore} from 'redux'
import rootReducer from '../reducers'

import {combineReducers,applyMiddleware,compose} from 'redux'

//import {reduxReactRouter,routerStateReducer} from 'redux-router'

import thunk from 'redux-thunk'

import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'

export default function configureStore() {
    const reducer = combineReducers({
        routing: routeReducer,
        app: rootReducer
    });

    const store = compose(
        applyMiddleware(thunk))(createStore)(reducer);

    return store
}