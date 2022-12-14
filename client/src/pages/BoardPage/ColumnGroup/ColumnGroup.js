import {DragDropContext} from 'react-beautiful-dnd';
import {useDispatch} from 'react-redux';

import Column from '../Column/Column';

import {updateTaskPosition} from '../../../store/board';

import styles from './ColumnGroup.module.css';



const ColumnGroup = ({boardData}) => {
  const dispatch = useDispatch();
  const Columns = Object.entries(boardData.columns).map(([_, column]) => {
    const tasks = boardData.tasks.filter(task => task.column === column.id);
    const orderedTask = tasks.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
    return <Column key={column.id} column={column} tasks={orderedTask}/>;
  });


  const onDragEnd = (result) => {
    const {destination, source, draggableId} = result;
    if (!destination) return;
    const isSameColumn = destination.droppableId === source.droppableId &&
            destination.index === source.index;
    if(isSameColumn) return;
    dispatch(updateTaskPosition({destination, source, taskId: draggableId}));
  };

  return (
    <>
      {/*<Notification/>*/}
      <section className={styles.group}>
        <h2 className="visually-hidden">Колонки с задачами</h2>
        <DragDropContext  onDragEnd={onDragEnd}>
          {Columns}
        </DragDropContext>
      </section>
    </>

  );
};

export default ColumnGroup;
