import Checkbox from '../../../components/Ui/Checkbox/Checkbox';

import styles from './Filter.module.css';

const Filter = (props) => {
  return <section className={styles.filter}>
    <Checkbox className={styles.filter__checkbox} checked>Комментарии</Checkbox>
    <Checkbox className={styles.filter__checkbox} >Описание</Checkbox>
    <Checkbox className={styles.filter__checkbox} >Тег</Checkbox>
  </section>;
};

export default Filter;