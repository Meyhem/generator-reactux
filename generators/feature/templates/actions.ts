import { createAction } from 'typesafe-actions'

export const dummyAction = createAction(<%= constantCase(featureName) %>/DUMMY_ACTION')<{property: boolean}>()
