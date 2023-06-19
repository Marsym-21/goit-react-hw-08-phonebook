import css from './User.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'redux/users/usersOperations';

export default function UserMenu() {
  const userloggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(userloggedIn);
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  return userloggedIn ? (
    <div className={css.nav}>
      <p className={css.text}>{userName}</p>
      <button className={css.btn} onClick={() => dispatch(logoutUser())}>
        Logout
      </button>
    </div>
  ) : (
    <div className={css.nav}>
      <p className={css.text}>User Name</p>
    </div>
  );
}
