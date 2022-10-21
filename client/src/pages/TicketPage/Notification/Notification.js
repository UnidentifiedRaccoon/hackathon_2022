import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import {metaOnFetchTask} from '../../../store/currentTask';

import {metaOnUpdateTask} from '../../../store/board';

import styles from './Notification.module.css';

const getClass = (title) => {
  let specialClass = '';
  if (title === 'loading') specialClass += ` ${styles.notification_loading} `;
  else if (title === 'error') specialClass += ` ${styles.notification_error} `;
  else if (title  === 'success') specialClass += ` ${styles.notification_success} `;
  return specialClass;
};

const results = ['loading', 'loading', 'loading', 'loading', 'loading'];

const Notification = () => {
  const [title, setTitle] = useState('Idle');
  const [operation, setOperation] = useState('idle idle idle');
  const metaOnFetchCurrentTask = useSelector(metaOnFetchTask);
  const metaOnUpdate = useSelector(metaOnUpdateTask);

  useEffect(() => {
    if (metaOnFetchCurrentTask && title !== metaOnFetchCurrentTask.title && results[0] === 'loading') {
      setTitle(metaOnFetchCurrentTask.title);
      setOperation(metaOnFetchCurrentTask.operation);
    }
    if (metaOnUpdate && title !== metaOnUpdate.title) {
      setTitle(metaOnUpdate.title);
      setOperation(metaOnUpdate.operation);
    }
  }, [metaOnFetchCurrentTask, metaOnUpdate,
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