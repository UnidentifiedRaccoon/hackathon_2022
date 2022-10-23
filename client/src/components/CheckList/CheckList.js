import Checkbox from '../Ui/Checkbox/Checkbox';
import Input from '../Ui/Input/Input';

import Button from '../Ui/Button/Button';

import Cross from '../Ui/Cross/Cross';

import styles from './CheckList.module.css';


const Checkboxes = (props) => {
  const {points, setPoints} = props;
  return <>
    {Object.entries(points).length ?
      <div>
        <h3>Задачи</h3>
        <ul className={styles.list}>
          {Object.entries(points).map(([id, item]) => {
            const fieldConfig = {placeholder: 'текст задачи', defaultValue: item.label};
            return (
              <li className={styles.list_item} key={id}>
                <Checkbox  className={styles.checkbox} checked={item.checked} onChange ={() => {
                  setPoints((prev) => ({
                    ...prev,
                    [id]: {
                      ...prev[id],
                      checked: !prev[id].checked,
                    },
                  }));
                }} />
                <Input  onChange={(evt) => {
                  setPoints((prev) => ({
                    ...prev,
                    [id]: {
                      ...prev[id],
                      label: evt.target.value,
                    },
                  }));
                }} config={fieldConfig}/>
                <Cross onClick={() => {
                  setPoints((prev) => {
                    const filtered = Object.entries(prev).filter(([prevId, _]) => prevId!==id);
                    return ({
                      ...Object.fromEntries(filtered),
                    });
                  });
                }} className={styles.cross}>Удалить пункт</Cross>
              </li>
            );
          }
          )}
        </ul>
      </div>
      : ''

    }
  </>;
};

const CheckList = (props) => {
  const {points, setPoints} = props;
  const addEmptyPoint = () => {
    setPoints((prev) => ({
      ...prev,
      [Math.random()]: {
        label: '',
        checked: false,
      },
    }));
  };
  return (
    <>
      <Checkboxes points={points} setPoints={setPoints}/>
      <Button onClick={addEmptyPoint} mode="add" color="empty">
        Добавить задачу
      </Button>
    </>

  );
};

export default CheckList;
