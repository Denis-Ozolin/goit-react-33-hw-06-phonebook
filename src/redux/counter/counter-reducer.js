import { combineReducers } from 'redux';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case 'counter/increment':
      return state + payload;

    case 'counter/decrement':
      return state - payload;
    default:
      return state;
  }
};

const stepReducer = (state = 10, { type, payload }) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
