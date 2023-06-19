import css from './Pages.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const userloggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(userloggedIn);
  return (
    <div className={css.nav}>
      {userloggedIn && (
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      )}
      <NavLink to="register" className={css.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
};
export default Navigation;
