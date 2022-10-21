import { Droppable } from 'react-beautiful-dnd';
import React from 'react';

import styles from '../Column/Column.module.css';


import DraggableTicketItem from '../TicketItem/DraggableTicketItem';

import TicketList from './TicketList';

const DroppableTicketList = ({column, tasks, isDropDisabled}) => {
  tasks = tasks.filter(t => Boolean(t));
  const Tasks = tasks.map((task, i) => <DraggableTicketItem task={task} index={i} key={`${task.id}`}/>);
  return (
    <Droppable droppableId={column.id} isDropDisabled={isDropDisabled}>
      {/*Как я понимаю при изменении (provided, snapshot) эта штука перерисовывается*/}
      {/*Соответственно TicketList тоже перерисовывается*/}
      {/*И это правильно, так как на каждом snapshot проводится проверка isDraggingOver*/}
      {/*В зависимости от isDraggingOver у TicketList меняется bg-color*/}
      {/*Значит нам действительно нужен эта перерисовка*/}
      {(provided, snapshot) => {
        const dndProps = {
          innerRef: provided.innerRef,
          droppableProps: provided.droppableProps,
          isDraggingOver: snapshot.isDraggingOver,
        };

        return (
          <TicketList
            dndProps={dndProps}
            className={styles.column__list}
          >
            {Tasks}
            {provided.placeholder}
          </TicketList>
        );}}
    </Droppable>
  );
};

export default DroppableTicketList;

