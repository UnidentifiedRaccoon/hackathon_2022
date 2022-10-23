import {Route, Routes} from 'react-router-dom';

import DroppableTicketList from '../TicketList/DroppableTicketList';
import TicketForm from '../../../modals/TicketForm/TicketForm';

import LinkButton from '../../../components/Ui/LinkButton/LinkButton';

import styles from './Column.module.css';

const emptyTask = {
  id: 'task-0',
  name: '',
  description: '',
  points: [],
  hasComment: false,
  hasDescription: false,
};

const Column = ({column, tasks}) => {
  return (
    <div className={styles.column}>
      <h2 className={styles.column__title}>{column.title}</h2>
      <div className={`border-wrap ${styles.column__content}`}>
        <DroppableTicketList column={column} tasks={tasks} />
        {column.id === 'column-1' &&
            <span className={styles.column__padding}>
              <LinkButton mode="add" className={styles.column__button} to="create">Добавить тикет</LinkButton>
              <Routes>
                <Route path="create" element={<TicketForm config={emptyTask} mode="add" backTo="/"/>}/>
              </Routes>
            </span>
        }
      </div>
    </div>
  );
};

export default Column;
