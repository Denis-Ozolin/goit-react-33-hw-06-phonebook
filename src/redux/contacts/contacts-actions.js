import { v4 as uuidv4 } from 'uuid';
import { types } from './contacts-types';

export const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

// const addContact = (name, number) => {
//   onCheckUniqueName(name)
//     ? alert(`${name} is alredy in contacts.`)
//     : setContacts(state => [
// {
//   id: uuidv4(),
//   name,
//   number,
// },
//         ...state,
//       ]);
// };

// const onDeleteContact = id => {
//   setContacts(state => state.filter(contact => contact.id !== id));
// };
