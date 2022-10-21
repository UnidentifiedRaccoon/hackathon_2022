import {useState} from 'react';

import ActionsPopup from '../ActionsPopup/ActionsPopup';

import styles from './FormHeader.module.css';


const FormHeader = ({column, onClickEdit, mode}) => {
  const [isActionPopupOpen, setIsActionPopupOpen] = useState(false);

  const onClickOpenPopup = () => {
    setIsActionPopupOpen(true);
  };

  const onClickClosePopup = () => {
    setIsActionPopupOpen(false);
  };

  const onClickEditHandler = (evt) => {
    onClickEdit(evt);
    setIsActionPopupOpen(false);
  };


  const Popup = isActionPopupOpen ?
    <ActionsPopup onClickClosePopup={onClickClosePopup}
      onClickEdit={onClickEditHandler}
      className={styles.header__popup}/> : '';
  const ActionsBtn = mode !== 'edit' ?  <>
    <button className={styles.header__actions}
      aria-label="Открыть список дополнительных действий"
      onClick={onClickOpenPopup}/>
    {Popup}
  </>
    : '';

  return (
    <header className={styles.header}>
      <h2 className={styles.header__title}>{column}</h2>
      {ActionsBtn}
    </header>
  );
};

export default FormHeader;