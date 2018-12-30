import { reducer, pureActions } from './stub';

describe('toHandleActions', () => {
  it('should match with previous results', () => {
    expect(reducer).toHandleActions(pureActions);
  });
});