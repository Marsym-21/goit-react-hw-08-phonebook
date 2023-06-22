// import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import {
  deleteContacts,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import css from './Contacts.module.css';
import { useEffect } from 'react';

const Contacts = () => {
  // const filterValue = useSelector(state => state.valueFilter);
  const contactsValue = useSelector(state => state.contacts.entities);
  const deleteContactTrue = useSelector(
    state => state.contacts.deleteContactFulfilled
  );
  const dispatch = useDispatch();
  console.log(contactsValue);

  // const visibleContacts = () => {
  //   const normalizeFilter = filterValue.toLowerCase();
  //   if (contactsValue.length > 0) {
  //     return contactsValue.filter(({ name }) =>
  //       name.toLowerCase().includes(normalizeFilter)
  //     );
  //   } else {
  //     return;
  //   }
  // };

  useEffect(() => {
    if (deleteContactTrue) {
      dispatch(fetchContacts());
    }
  }, [dispatch, deleteContactTrue]);

  return (
    <ul className={css.list}>
      {contactsValue.length > 0 ? (
        contactsValue.map(({ id, name, phone }) => (
          <li className={css.item} key={id}>
            &#10003; {name}: {phone}
            <button
              className={css.contact_btn}
              type="submit"
              id={id}
              onClick={evt => dispatch(deleteContacts(evt.target.id))}
            >
              Delet
            </button>
          </li>
        ))
      ) : (
        <p className={css.item}> No contacts added </p>
      )}
    </ul>
  );
};

export default Contacts;
