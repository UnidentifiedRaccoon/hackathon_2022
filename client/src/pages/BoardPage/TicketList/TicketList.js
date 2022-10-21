import React from 'react';

import styles from './TicketList.module.css';

const TicketList = ({children, dndProps, className}) => {

  const {droppableProps, isDraggingOver, innerRef} = dndProps;
  const classes = `${styles.list} ${isDraggingOver ? styles.list_dragged_over : ''} ${className}`;
  return (
    <ul ref={innerRef} className={classes} {...droppableProps}>
      {children}
    </ul>
  );

};

export default React.memo(TicketList);