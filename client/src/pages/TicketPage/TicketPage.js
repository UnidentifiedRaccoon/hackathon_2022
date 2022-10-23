import styles from './TicketPage.module.css';
import BackToBoardPage from './BackToBoardPage/BackToBoardPage';
import TicketForm from './TicketForm/TicketForm';

const TicketPage = () => {

  return (
    <main className={styles.ticket}>
      <div className="center">
        <h1 className="visually-hidden">Страница тикета</h1>
        <BackToBoardPage/>
        {/*<Notification/>*/}
        <TicketForm/>
      </div>

    </main>
  );
};

export default TicketPage;
