import { createReducer, ActionType } from 'typesafe-actions'

import * as actions from './actions'

interface AccountState { }

const initialState: AccountState = { }

export const accountReducer = createReducer<AccountState, ActionType<typeof actions>>(initialState)
  .handleAction(actions.dummyAction,
    (s, a) => ({ ...s }))
