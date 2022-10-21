import {Link} from 'react-router-dom';

import Cross from '../../../../components/Ui/Cross/Cross';

import styles from './ActionsPopup.module.css';

const ActionsPopup = ({className, onClickClosePopup, onClickEdit}) => {
  return <div className={`${styles.popup} ${className}`}>
    <Link className={styles.popup__btn} to="delete">Удалить</Link>
    <button className={styles.popup__btn} onClick={onClickEdit}>Редактировать</button>
    <Cross className={styles.popup__cross} onClick={onClickClosePopup} onKeyDown={onClickClosePopup}>
      Закрыть всплывашку
    </Cross>
  </div>;
};

export default ActionsPopup;