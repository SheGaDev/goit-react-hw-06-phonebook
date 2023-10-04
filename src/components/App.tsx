import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Contact, Form, RootState } from '@types';
import ContactForm from './contact-form/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contact-list/ContactList';
import Container from './container/Container';

import { addContact, deleteContact } from '../redux/contactsSlice';
import { changeFilter } from '../redux/filterSlice';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state: RootState): Contact[] => state.contacts);
  const filter = useSelector((state: RootState): string => state.filter);

  const contactCreate = (contact: Form) => {
    if (contacts.some((cont) => cont.name.toLowerCase() === contact.name.toLowerCase())) {
      alert(`${contact.name} is arleady in contacts.`);
      return;
    }
    dispatch(addContact(contact));
  };

  const contactDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  const filterChange = (event: ChangeEvent) => {
    const { value }: { value: string } = event.target as HTMLInputElement;
    dispatch(changeFilter(value));
  };

  return (
    <Container>
      <div className='flex w-[100%] flex-col items-center gap-2'>
        <div className='w-[100%] rounded-b-lg bg-black px-12 py-4'>
          <h1 className='text-center text-white'>
            <b>Phonebook</b>
          </h1>
        </div>
        <ContactForm contactCreate={contactCreate} />
      </div>
      <div className='m-2 mt-10 flex flex-col gap-4'>
        <div className='rounded-b-lg bg-black px-12 py-4'>
          <h2 className='text-center text-white'>
            <b>Contacts</b>
          </h2>
        </div>
        <div className='flex flex-col items-center'>
          <Filter filter={filterChange} />
          <ContactList contacts={contacts} contactDelete={contactDelete} filter={filter} />
        </div>
      </div>
    </Container>
  );
};

export default App;
