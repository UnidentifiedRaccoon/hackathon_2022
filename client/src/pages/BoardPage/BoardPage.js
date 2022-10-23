import {useDispatch, useSelector} from 'react-redux';

import {useEffect} from 'react';

import {boardSelector, fetchBoard} from '../../store/board';

import styles from './BoardPage.module.css';
import ColumnGroup from './ColumnGroup/ColumnGroup';

const BoardPage = () => {
  const boardData = useSelector(boardSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoard());
  }, [dispatch]);
  return (
    <main className={styles.board}>
      <div className="center">
        <h1 className="visually-hidden">Доска задач</h1>
        <ColumnGroup boardData={boardData}/>
      </div>
    </main>
  );
};
export default BoardPage;
