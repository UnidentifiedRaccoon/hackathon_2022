import {Link} from 'react-router-dom';

import styles from './BackToBoardPage.module.css';

const BackToBoardPage = () => {
  return <Link to="/" className={styles.back}>
        Вернуться к задачам
  </Link>;
};

export default BackToBoardPage;