import {Link} from 'react-router-dom';

import Button from '../Ui/Button/Button';

import styles from './UserEntranceForm.module.css';

const UserEntranceForm = (props) => {
  const {children, onSubmit, submitBtnText, title, linkTo, linkText} = props;

  return (
    <article className={`${styles.wrap}`}>
      <h1 className={styles.title}>{title}</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        {children}
        <Button className={styles.btn} size="small"  type="submit">
          {submitBtnText}
        </Button>
        <Link to={linkTo} className={styles.link}>
          {linkText}
        </Link>
      </form>
    </article>
  );
};

export default UserEntranceForm;
