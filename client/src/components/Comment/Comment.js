import Cross from '../Ui/Cross/Cross';

import styles from './Comment.module.css';

const Comment = ({comment,  className = '', onClickDelete}) => {
  const {id, author, text} = comment;
  const onClick = () => {
    onClickDelete(id);
  };

  const onKeyDown = (evt) => {
    if (evt.keyCode === 13) onClickDelete(id);
  };

  return (
    <div className={styles.comment}>
      <header className={styles.comment__header}>
        <b className={styles.comment__author}>{author}</b>
        <Cross onClick={onClick} onKeyDown={onKeyDown} className={styles.comment__cross}>Удалить комментарий</Cross>
      </header>
      <p className={styles.comment__text}>
        {text}
      </p>
    </div>
  );
};
export default Comment;
