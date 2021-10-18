import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              delete
            </button>
          </li>
        ))}
    </List>
  );
};
