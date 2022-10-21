import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import {
  metaOnUpdateTask,
  metaOnFetchBoard,
  metaOnUpdateTaskPosition,
  metaOnAddTask,
  metaOnDeleteTask,
} from '../../../store/board';

import styles from './Notification.module.css';

const getClass = (title) => {
  let specialClass = '';
  if (title === 'loading') specialClass += ` ${styles.notification_loading} `;
  else if (title === 'error') specialClass += ` ${styles.notification_error} `;
  else if (title  === 'success') specialClass += ` ${styles.notification_success} `;
  return specialClass;
};

const Notification = () => {
  const [title, setTitle] = useState('Idle');
  const [operation, setOperation] = useState('idle idle idle');
  const metaOnUpdatePos = useSelector(metaOnUpdateTaskPosition);
  const metaOnAdd = useSelector(metaOnAddTask);
  const metaOnUpdate = useSelector(metaOnUpdateTask);
  const metaOnFetch = useSelector(metaOnFetchBoard);
  const metaOnDelete = useSelector(metaOnDeleteTask);

  useEffect(() => {
    if (metaOnDelete && title !== metaOnDelete.title) {
      setTitle(metaOnDelete.title);
      setOperation(metaOnDelete.operation);
    }
    if (metaOnFetch && title !== metaOnFetch.title) {
      setTitle(metaOnFetch.title);
      setOperation(metaOnFetch.operation);
    }
    if (metaOnUpdatePos && title !== metaOnUpdatePos.title) {
      setTitle(metaOnUpdatePos.title);
      setOperation(metaOnUpdatePos.operation);
    }
    if (metaOnAdd && title !== metaOnAdd.title) {
      setTitle(metaOnAdd.title);
      setOperation(metaOnAdd.operation);
    }
    if (metaOnUpdate && title !== metaOnUpdate.title) {
      setTitle(metaOnUpdate.title);
      setOperation(metaOnUpdate.operation);
    }
  }, [metaOnUpdatePos, metaOnAdd, metaOnUpdate, metaOnFetch, metaOnDelete,
  ]);


  useEffect(() => {
    const timeId = setTimeout(() => {
      if (title !== 'loading') {
        setTitle('Idle');
        setOperation('idle idle idle');
      }
    }, 1500);
    return () => clearTimeout(timeId);
  }, [title]);

  const specialClass = getClass(title);
  const classes = `${styles.notification} ${specialClass}`;
  
  return <div className={classes}>
    <h3 className={styles.notification__title}>{title}</h3>
    <p className={styles.notification__text}>{operation}</p>
  </div>;
};

export default Notification;