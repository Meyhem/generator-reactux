import { createAction } from 'typesafe-actions'

export const dummyAction = createAction('POST/DUMMY_ACTION')<{property: boolean}>()
