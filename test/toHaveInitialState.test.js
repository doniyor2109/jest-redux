import { reducer, initialState } from './stub';

describe('toHaveInitialState', () => {
  it('should have correct initial state', () => {
    expect(reducer).toHaveInitialState(initialState);
  });
});
