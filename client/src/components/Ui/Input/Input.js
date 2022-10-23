import styles from './Input.module.css';

// You can configure:
// const {name, placeholder, value, type, disabled, readOnly, multiline} = config;
const Input = ({children, className = '', config, register, onClick, onChange, onBlur}) => {
  const {multiline, ...rest} = config;
  const onChangeHandler = (event) => {
    if (onChange)  onChange(event);
    register.onChange(event);
  };

  const onBlurHandler = (event) => {
    if (onBlur)  {
      onBlur(event);
    }
    register.onBlur(event);
  };


  const customInput = Boolean(multiline) ?
    <textarea className={`${styles.input__field} ${styles.input__area}`}
      {...rest}
      {...register}
      onClick={onClick}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}

    />
    :
    <input className={`${styles.input__field}`}
      {...rest}
      {...register}
      onClick={onClick}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
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
