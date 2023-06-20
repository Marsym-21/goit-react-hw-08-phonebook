// import * as contactsActions from './contactsAction';
import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contacts-api';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());
//   try {
//     const contacts = await fetchContact();
//     console.log(contacts.data);
//     dispatch(contactsActions.fetchContactsSuccess(contacts.data));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// };

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const contacts = await axios.get('/contacts');
    return contacts;
  } catch (error) {
    return error.message;
  }
});

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const contacts = await addContact(contact);
      return contacts;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const contacts = await deleteContact(id);
      return contacts;
    } catch (error) {
      return error.message;
    }
  }
);
