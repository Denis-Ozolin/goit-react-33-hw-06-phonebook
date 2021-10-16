import { connect } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDelete = null }) => {
  return (
    <>
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
    </>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
