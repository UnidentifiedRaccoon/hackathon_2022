import {Link} from 'react-router-dom';

import styles from './LinkButton.module.css';

const getClasses = (mode, size) => {
  const classes = [];
  classes.push(mode !== '' ? styles[`link_${mode}`] : '');
  classes.push(size !== '' ? styles[`link_${size}`] : '');
  return classes.join(' ');
};

// LinkButton styles: ""/"add"/"small"
const LinkButton = ({children, className = '', type = 'button', mode = '', size = '', to, onClick}) => {
  const modeClasses = getClasses(mode, size);
  return <Link className={`${styles.link} ${modeClasses} ${className}`} type={type} to={to} onClick={onClick}>
    <span className={styles.link__before}></span>
    <span className={styles.link__text}>{children}</span>
  </Link>;
};
export default LinkButton;
