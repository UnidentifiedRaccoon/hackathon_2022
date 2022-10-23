import {Link} from 'react-router-dom';

import styles from './LinkButton.module.css';
import Cross from './Cross/Cross';

const getClasses = (mode, size, color) => {
  const classes = [];
  classes.push(mode !== '' ? styles[`link_${mode}`] : '');
  classes.push(size !== '' ? styles[`link_${size}`] : '');
  classes.push(color !== '' ? styles[`link_${color}`] : '');
  return classes.join(' ');
};

// LinkButton styles: ""/"add"/"small"
const LinkButton = ({children, className = '', type = 'button', mode = '', size = '', color='', to, onClick}) => {
  const modeClasses = getClasses(mode, size, color);
  return <Link className={`${styles.link} ${modeClasses} ${className}`} type={type} to={to} onClick={onClick}>
    {mode === 'add' ?
      <span className={styles.cross}>
        <Cross/>
      </span> : ''
    }
    <span className={styles.link__text}>{children}</span>
  </Link>;
};
export default LinkButton;
