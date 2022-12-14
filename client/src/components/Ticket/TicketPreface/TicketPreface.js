import React from 'react';

import {Link} from 'react-router-dom';


import styles from './TicketPreface.module.css';

const TicketPreface = ({config}) => {
  const {id, title, comments, description = ''} = config;


  return <article className={styles.preface}>
    <div className={styles.preface__wrapper}>
      <h4 className={styles.preface__title}>{title}</h4>

    </div>
    <div className={styles.preface__wrapper}>
      <Link className={styles.preface__actions} to={`/full/${id}`}>
        Открыть список дополнительных действий
      </Link>
      <div className={styles.preface__alerts}>
        {comments.length > 0 && <span className={styles.preface__comment} aria-label="Есть комментарии"></span>}
        {description !== '' && Boolean(description) &&
            <span className={styles.preface__description} aria-label="Есть описание"></span>}
      </div>
    </div>
  </article>;
};
export default React.memo(TicketPreface);
