const ADD_TODOS = 'ADD_TODOS';
const DELETE_TODO = 'DELETE_TODO';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODOS:
      return [...state, payload];
    case DELETE_TODO: {
      const filteredList = state.filter(i => i.id !== payload);
      return filteredList;
    }
    default:
      return state;
  }
};

export const addTodos = todo => ({ type: ADD_TODOS, payload: todo });
export const deleteTodo = id => ({ type: DELETE_TODO, payload: id });
