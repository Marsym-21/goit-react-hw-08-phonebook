import css from './Pages.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const userloggedin = useSelector(state => state.auth.isLoggedIn);

  return (
    <div className={css.nav}>
      {userloggedin && (
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
