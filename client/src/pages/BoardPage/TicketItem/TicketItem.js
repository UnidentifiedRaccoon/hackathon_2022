import {Route, Routes, useNavigate} from 'react-router-dom';

import TicketPreface from '../../../components/Ticket/TicketPreface/TicketPreface';
import TicketForm from '../../../modals/TicketForm/TicketForm';

import styles from './TicketItem.module.css';


const TicketItem = ({task ,dndProps}) => {
  const navigate = useNavigate();

  const {dragHandleProps ,draggableProps, isDragging, innerRef} = dndProps;
  const className = `${styles.item} ${isDragging ? styles.item_dragged : ''}`;

  const onClickOpen= (evt) => {
    if (evt.target.tagName !== 'A') navigate(`edit/${task.id}`);
  };

  const onKeyDownOpen = (evt) => {
    switch (evt.keyCode) {
    case 13: onClickOpen(evt); break;
    default: {}
    }
  };

  return (
    <>
      <li
        onClick={onClickOpen} onKeyDown={onKeyDownOpen}
        className={className}
        {...draggableProps}
        {...dragHandleProps}
        ref={innerRef}
      >
        <TicketPreface config={task} />
      </li>
      <Routes>
        <Route path={`edit/${task.id}`} element={<TicketForm config={task} mode="edit" backTo="/"/>}/>
      </Routes>
    </>
  );
};

export default TicketItem;