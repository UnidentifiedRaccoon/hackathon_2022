import {Link} from 'react-router-dom';

import styles from './Layout.module.css';

import logo from './telecom.png';
import Leave from './Leave/Leave';
import Settings from './Settings/Settings';

const Layout = (props) => {
  const {children} = props;
  return (
    <>
      <header >
        <nav className={`center ${styles.header_nav}`}>
          <Link to="/">
            <img src={logo} alt="telecom logo" height="70px"/>
          </Link>
          <div className={styles.user_nav}>
            <Link to="profile">
                    Пользовательский профиль
            </Link>
            <Link to="settings">
              <Settings size="30"/>
            </Link>
            <Link to="login">
              <Leave size="25"/>
            </Link>
          </div>
        </nav>
      </header>
      <>
        {children}
      </>
      <footer>
        <nav  className="center">
          <a href="https://github.com/UnidentifiedRaccoon/hackathon_2022">
                  repo проекта
          </a>
        </nav>
      </footer>
    </>
  );
};
export default Layout;
