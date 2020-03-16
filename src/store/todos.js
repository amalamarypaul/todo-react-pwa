const ADD_TODOS = 'ADD_TODOS';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODOS:
      return [...state, payload];
    default:
      return state;
  }
};

export const addTodos = todo => ({ type: ADD_TODOS, payload: todo });
