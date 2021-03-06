import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import { makeRootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'


export const history = createBrowserHistory()
const sagaMw = createSagaMiddleware()
const rootReducer = makeRootReducer(history)

export const store = createStore(rootReducer, applyMiddleware(sagaMw, routerMiddleware(history)))

sagaMw.run(rootSaga)

