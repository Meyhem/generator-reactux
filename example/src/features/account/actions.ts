import { createAction } from 'typesafe-actions'

export const dummyAction = createAction('ACCOUNT/DUMMY_ACTION')<{property: boolean}>()
