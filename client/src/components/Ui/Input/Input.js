import styles from './Input.module.css';

// You can configure:
// const {name, placeholder, value, type, disabled, readOnly, multiline} = config;
const Input = ({children, className = '', config, register, onClick, onChange}) => {
  const {multiline, ...rest} = config;

  const customInput = Boolean(multiline) ?
    <textarea className={`${styles.input__field} ${styles.input__area}`}
      onChange={onChange}
      {...rest}
      {...register}
      onClick={onClick}
    />
    :
    <input className={`${styles.input__field}`}
      onChange={onChange}
      {...rest}
      {...register}
      onClick={onClick}
    />;

  return (
    <label className={`${styles.input} ${className}`}>
      {Boolean(children) && <span className={styles.input__text}>{children}</span>}
      <span className={styles.input__field_wrapper}>
        {customInput}
      </span>

    </label>

  );
};
export default Input;
