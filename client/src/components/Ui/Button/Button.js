import styles from './Button.module.css';


// Button styles: ""/"add"/"small"
const Button = ({children, className = '', type = 'button', disabled = false, mode = '', size = '', onClick}) => {
  const modifications = [];
  modifications.push(mode !== '' ? styles[`button_${mode}`] : '');
  modifications.push(size !== '' ? styles[`button_${size}`] : '');
  const modeClasses = modifications.join(' ');

  return <button
    className={`${styles.button} ${modeClasses} ${className}`}
    type={type}
    onClick={onClick}
    disabled={disabled}>
    <span className={styles.button__before}></span>
    <span className={styles.button__text}>{children}</span>
    <span className={styles.button__after}></span>
  </button>;
};
export default Button;
