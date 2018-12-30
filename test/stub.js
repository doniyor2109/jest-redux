export const initialState = {
  number: 0
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return state.number + action.payload;
    case 'REMOVE':
      return state.number - action.payload;
    default:
      return state;
  }
}

export const add = (number) => ({ type: 'ADD', payload: number });
export const remove = (number) => ({ type: 'REMOVE', payload: number });

export const actions = {
  add,
  remove,
};

export const pureActions = {
  add: () => add(1),
  remove: () => remove(1),
};