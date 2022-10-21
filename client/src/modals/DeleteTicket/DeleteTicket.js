import { useNavigate} from 'react-router-dom';

import Modal from '../Modal';
import generalStyles from '../Modal.module.css';

import styles from './DeleteTicket.module.css';

const DeleteTicket = ({backTo, onClickDelete}) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(backTo);
  };
  return (
    <Modal backTo={backTo} className={styles.modal}>
      <h2 className={generalStyles.modal__title}>Удалить тикет?</h2>
      <div className={styles.modal__answers}>
        <button className={styles.modal__btn} onClick={onClickDelete}>Да</button>
        <button className={styles.modal__btn} onClick={onClick}>Нет</button>
      </div>

    </Modal>

  );
};

export default DeleteTicket;