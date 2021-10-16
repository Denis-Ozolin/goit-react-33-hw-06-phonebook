import { connect } from 'react-redux';
import { filterContacts } from 'redux/contacts/contacts-actions';
import { InputContainer } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  // const handleChange = event => {
  //   const { value } = event.currentTarget;

  //   onChange(value);
  // };

  return (
    <InputContainer>
      <label>
        Find contacts by name
        <input value={value} onChange={onChange} type="text" />
      </label>
    </InputContainer>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(filterContacts(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
