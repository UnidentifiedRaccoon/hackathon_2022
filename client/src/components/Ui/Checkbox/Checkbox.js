import styles from './Checkbox.module.css';

const Checkbox = ({children, className = '', checked, disabled, onChange, name = ''}) => {
  const onChangeHandler = (evt) => onChange(evt);

  return (
    <label className={`${styles.label} ${className}`}>
      <input className={`${styles.input} visually-hidden`}
        name={name}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChangeHandler}/>
      <span className={styles.checkmark}></span>
      <span className={styles.text}>{children}</span>
    </label>
  );

};
export default Checkbox;
