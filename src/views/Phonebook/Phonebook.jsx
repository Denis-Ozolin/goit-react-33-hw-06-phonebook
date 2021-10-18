import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, Title } from './Phonebook.styled';

export const Phonebook = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};
