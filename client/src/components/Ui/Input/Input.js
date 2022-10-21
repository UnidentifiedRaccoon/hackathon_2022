import styles from './Input.module.css';

// You can configure:
// const {name, placeholder, value, type, disabled, readOnly, multiline} = config;
const Input = ({children, className = '', config, register, onClick}) => {
  const {multiline, ...rest} = config;

  const customInput = Boolean(multiline) ?
    <textarea className={`${styles.input__field} ${styles.input__area}`}
      {...rest}
      {...register}
      onClick={onClick}/>
    :
    <input className={`${styles.input__field}`}
      {...rest}
      {...register}
      onClick={onClick}/>;

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
