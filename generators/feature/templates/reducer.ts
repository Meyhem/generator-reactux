import { createReducer, ActionType } from 'typesafe-actions'

import * as actions from './actions'

interface <%= pascalCase(featureName) %>State { }

const initialState: <%= pascalCase(featureName) %>State = { }

export default createReducer<<%= pascalCase(featureName) %>State, ActionType<typeof actions>(initialState)
    .handleAction(actions.dummyAction,
        (s, a) => ({ ...s }))
