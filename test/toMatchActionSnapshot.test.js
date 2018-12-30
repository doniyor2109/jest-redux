import { pureActions } from './stub';

describe('toHaveInitialState', () => {
  it('should have correct initial state', () => {
    expect(pureActions).toMatchActionSnapshot();
  });
});
