import { combineReducers } from 'redux';
import { types } from './contacts-types';

const errorMessage = (prevState, contactName) => {
  alert(`${contactName} is alredy in contacts.`);
  return prevState;
};

const items = (state = [], { type, payload }) => {
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

// const onCheckUniqueName = value => {
//   return contacts.find(({ name }) => name === value);
// };

//   const addContact = (name, number) => {
//     onCheckUniqueName(name)
//       ? alert(`${name} is alredy in contacts.`)
//       : setContacts(state => [
//           {
//             id: uuidv4(),
//             name,
//             number,
//           },
//           ...state,
//         ]);
//   };

const filter = (state = '', { type, payload }) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
