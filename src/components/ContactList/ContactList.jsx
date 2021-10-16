import { connect } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            {onDelete && (
              <button type="button" onClick={() => onDelete(id)}>
                delete
              </button>
            )}
          </li>
        ))}
    </List>
  );
};

const getContacts = (allContacts, searchValue) => {
  const filteredContacts = allContacts.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return filteredContacts ? filteredContacts : allContacts;
};

const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    contacts: getContacts(items, filter),
  };
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
