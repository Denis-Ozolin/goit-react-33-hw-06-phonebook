import { combineReducers } from 'redux';
import { types } from './contacts-types';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Baraq Obama', number: '342-34-22' },
  { id: 'id-6', name: 'John Veek', number: '456-45-64' },
  { id: 'id-7', name: 'Gerald Wicher', number: '666-66-66' },
];

const errorMessage = (prevState, contactName) => {
  alert(`${contactName} is alredy in contacts.`);
  return prevState;
};

const items = (state = defaultContacts, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return state.find(({ name }) => name === payload.name)
        ? errorMessage(state, payload.name)
        : [payload, ...state];
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
