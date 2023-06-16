import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { userNameSlice } from './userNameSlice';
// import { contactsReducer } from './contacts/contactsReducer';
import { contactsSlice } from './contacts/contactsReducer';
import { usersSlice } from './users/usersReducer';
// import { contactSlice } from './contactSlice';

// import { persistContactSlice } from './contactSlice';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    valueFilter: filterSlice.reducer,
    userName: userNameSlice.reducer,
    users: usersSlice.reducer,
  },

  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   });
  // },
});

// export const persistor = persistStore(store);
