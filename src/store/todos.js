const ADD_TODOS = 'ADD_TODOS';

const initialState=[
  {
    id: 1,
    title: 'Activity number 1',
    addedDate: '16 Mar 2020',
    isDone: false
  },
  {
    id: 2,
    title: 'Purchase vegetables',
    addedDate: '16 Mar 2020',
    isDone: false
  },
  {
    id: 3,
    title: 'Evening walk for 2 hrs',
    addedDate: '16 Mar 2020',
    isDone: true
  },
  {
  id: 4,
  title: 'Todo from store',
  addedDate: '16 Mar 2020',
  isDone: false
}]

export default (state=initialState,{type,payload})=>{
  switch (type) {
    case ADD_TODOS:
      return [...state,payload]
      break;
    default:
      return state;
  }

};

export const addTodos =(todo)=>({ type:ADD_TODOS, payload:todo });
