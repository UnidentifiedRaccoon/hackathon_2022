import {Draggable} from 'react-beautiful-dnd';
import React from 'react';

import TicketItem from './TicketItem';

const DraggableTicketItem = ({task, index}) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {/*Как я понимаю при изменении (provided, snapshot) эта штука перерисовывается*/}
      {/*Соответственно TicketItem тоже перерисовывается*/}
      {/*Правильно ли это?*/}
      {/*Я не знаю что меняется в пропсах*/}
      {/*Нужна ли здесь перерисовка*/}
      {(provided, snapshot) => {
        const dndProps = {
          draggableProps: provided.draggableProps,
          dragHandleProps: provided.dragHandleProps,
          innerRef: provided.innerRef,
          isDragging: snapshot.isDragging,
        };
        return (
          <TicketItem task={task} dndProps={dndProps}/>
        );}}
    </Draggable>
  );
};

export default DraggableTicketItem;