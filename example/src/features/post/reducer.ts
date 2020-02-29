import { createReducer, ActionType } from 'typesafe-actions'

import * as actions from './actions'

interface PostState { }

const initialState: PostState = { }

export const postReducer = createReducer<PostState, ActionType<typeof actions>>(initialState)
  .handleAction(actions.dummyAction,
    (s, a) => ({ ...s }))
