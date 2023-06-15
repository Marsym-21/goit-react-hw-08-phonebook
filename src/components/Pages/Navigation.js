import css from './Pages.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={css.nav}>
      <NavLink to="/contacts" className={css.link}>
        Contacts
      </NavLink>
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
