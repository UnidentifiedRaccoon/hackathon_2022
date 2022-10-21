import styles from './Cross.module.css';

const Cross = ({children, className, onClick, onKeyDown}) => {
  return (
    <button className={`${styles.cross} ${className}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-label={children}/>
  );
};

export default Cross;
