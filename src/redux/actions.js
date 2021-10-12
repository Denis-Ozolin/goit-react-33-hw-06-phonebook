export const increment = value => ({
  type: 'counter/increment',
  payload: value,
});

export const decrement = value => ({
  type: 'counter/decrement',
  payload: value,
});

// import { createAction } from '@reduxjs/toolkit';

// const addTodo = createAction('todos/add', text => ({
//   payload: {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   },
// }));

// const deleteTodo = createAction('todos/delete');

// const changeFilter = createAction('todos/changeFilter');

// const toggleCompleted = createAction('todos/toggleCompleted');

// export default { addTodo, deleteTodo, changeFilter, toggleCompleted };
