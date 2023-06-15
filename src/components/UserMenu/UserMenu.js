import css from './User.module.css';
import { useSelector } from 'react-redux';
import { getUserName } from 'redux/userNameSlice';

export default function UserMenu() {
  const userName = useSelector(getUserName);

  return (
    <div className={css.nav}>
      <p className={css.text}>{userName}</p>
      <button className={css.btn}>Logout</button>
    </div>
  );
}
