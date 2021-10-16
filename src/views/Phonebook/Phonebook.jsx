import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container, Title } from './Phonebook.styled';

export const Phonebook = () => {
  //   const [contacts, setContacts] = useState(
  //     () => JSON.parse(localStorage.getItem('contacts')) || defaultContacts,
  //   );

  //   const [filter, setFilter] = useState('');

  //   useEffect(() => {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }, [contacts]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};
