import styles from './Button.module.css';
import Cross from './Cross/Cross';


// Button styles: ""/"add"/"small"/"fit"/empty
const Button = ({children, className = '',
  type = 'button', disabled = false, mode = '', size = '', color='', onClick}) => {
  const modifications = [];
  modifications.push(mode !== '' ? styles[`button_${mode}`] : '');
  modifications.push(size !== '' ? styles[`button_${size}`] : '');
  modifications.push(color !== '' ? styles[`button_${color}`] : '');
  const modeClasses = modifications.join(' ');

  return <button
    className={`${styles.button} ${modeClasses} ${className}`}
    type={type}
    onClick={onClick}
    disabled={disabled}>
    {mode === 'add' ?
      <span className={styles.cross}>
        <Cross/>
      </span> : ''
    }
    <span className={styles.button__text}>{children}</span>
    <span className={styles.button__after}></span>
  </button>;
};
export default Button;
