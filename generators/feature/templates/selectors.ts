import { createSelector } from 'reselect'
import { RootState } from '../types'

const selectSomething = createSelector((s: RootState) => 123, c => 'hello')