import css from './Pages.module.css';
import { useState } from 'react';

export const Login = () => {
  const [userData, setUserData] = useState({});

  const handleSubmitName = evt => {
    evt.preventDefault();
    const { email, password } = evt.target;

    setUserData({
      email: email.value,
      password: password.value,
    });

    email.value = '';
    password.value = '';
  };

  console.log(userData);
  return (
    <form className={css.form} onSubmit={handleSubmitName}>
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
