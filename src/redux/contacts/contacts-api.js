import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContact() {
  const contacts = await axios.get('/contacts');
  console.log(contacts.data);
  return contacts.data;
}

export async function addContact(contact) {
  return fetch('https://https://connections-api.herokuapp.com/contacts', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(contact),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}

export async function deleteContact(id) {
  return fetch(`https://connections-api.herokuapp.com/contacts/${id}`, {
    method: 'DELETE',
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}
