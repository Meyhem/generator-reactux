import { postReducer } from '../reducer'

describe('postReducer', () => {
  test('postReducer inits', () => {
    const state = postReducer(undefined, {} as any)
    expect(state).not.toBeUndefined()
  })
})
