import css from './Pages.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName } from 'redux/userNameSlice';

export const Register = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  const handleSubmitName = evt => {
    evt.preventDefault();
    const { name, email, password } = evt.target;
    dispatch(setUserName(name.value));

    setUserData({
      name: name.value,
      email: email.value,
      password: password.value,
    });

    name.value = '';
    email.value = '';
    password.value = '';
  };

  console.log(userData);
  return (
    <form className={css.form} onSubmit={handleSubmitName}>
      <label className={css.label}>
        Name
        <input
          //   value={dataName}
          className={css.input}
          type="text"
          placeholder="Enter your name"
          name="name"
          //   onChange={handleChangeName}
          required
        />
      </label>
      <label className={css.label}>
        Email
        <input
          //   value={number}
          className={css.input}
          type="email"
          placeholder="Enter your email"
          name="email"
          //   onChange={handleChangeName}
          required
        />
      </label>
      <label className={css.label}>
        Password
        <input
          //   value={number}
          className={css.input}
          type="text"
          placeholder="Enter your password"
          name="password"
          //   onChange={handleChangeName}
          required
        />
      </label>
      <button className={css.form_btn} type="submit">
        Add user
      </button>
    </form>
  );
};
