import { accountReducer } from '../reducer'

describe('accountReducer', () => {
  test('accountReducer inits', () => {
    const state = accountReducer(undefined, {} as any)
    expect(state).not.toBeUndefined()
  })
})
