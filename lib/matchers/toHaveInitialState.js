const state = undefined;
const action = { type: null };

export function toHaveInitialState(reducer, initialState) {
    const result = reducer(state, action);
    const pass = this.equals(result, initialState);

    return {
        pass,
        actual: result,
        message: () => `
        Expected reducer to have initial state: \n
          ${this.utils.printExpected(initialState)}
        Received:\n
          ${this.utils.printReceived(result)} 
      `
    };
}