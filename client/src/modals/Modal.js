import ReactDOM from 'react-dom';

import {useNavigate} from 'react-router-dom';

import Cross from '../components/Ui/Cross/Cross';

import styles from './Modal.module.css';
import generalStyles from './Modal.module.css';


const Backdrop = ({onClickClose}) => {
  return <div className={styles.modal__backdrop} onClick={onClickClose}/>;
};

const ModalOverlay = ({children, className, onClickClose}) => {
  return (
    <article className={`${styles.modal} ${className}`}>
      <Cross className={generalStyles.modal__close} onClick={onClickClose} >
        Закрыть форму
      </Cross>
      <div className={styles.modal__content}>{children}</div>
    </article>
  );
};

const Modal = ({children, backTo, className = ''}) => {
  const navigate = useNavigate();
  const onClickClose = () => {
    navigate(backTo);
  };
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClickClose={onClickClose}/>, document.querySelector('#backdrop-root') )}
      {ReactDOM.createPortal(
        <ModalOverlay className={className} onClickClose={onClickClose}>{children}</ModalOverlay>,
        document.querySelector('#modal-root')
      )}
    </>
  );
};

export default Modal;