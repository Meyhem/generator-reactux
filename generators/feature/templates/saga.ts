import { takeEvery } from 'redux-saga/effects'
import { getType } from 'typesafe-actions';

import * as actions from './actions'

export function* <%= featureName %>RootSaga() {
    yield takeEvery(getType(actions.dummyAction), dummySaga)
}

function* dummySaga() {
    yield 0
}