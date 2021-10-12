import { createStore } from 'redux';

const initialState = { counterValue: 0 };
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/increment':
      return { counterValue: state.counterValue + payload };
    case 'counter/decrement':
      return { counterValue: state.counterValue - payload };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;

// import { configureStore } from '@reduxjs/toolkit';

// const store = configureStore({})
