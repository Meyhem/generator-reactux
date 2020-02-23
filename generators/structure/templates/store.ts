import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'
import { dummyAction } from './person/actions'

const sagaMw = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMw))

sagaMw.run(rootSaga)

store.dispatch(dummyAction({property: true}))