import {useState} from 'react';

import Input from '../Ui/Input/Input';

import styles from './Suggest.module.css';

const Suggest = (props) => {
  const {register, setValue, className = ''} = props;
  const [executors, setExecutors] = useState([]);
  const [currentOptionId, setCurrentOptionId] = useState(null);

  const executorFieldConfig = {placeholder: 'Исполнитель', type: 'search', id: currentOptionId};
  const selectExecutor = (event) => {
    event.preventDefault();
    setCurrentOptionId(event.target.dataset.userId);
    setValue('executor', event.target.innerHTML);
    setExecutors([]);
  };


  const executorSuggest = (event) => {
    if (!event.target.value) {
      setExecutors([]);
    } else {
      const requestedUsers = [
        {
          id: '1',
          name: 'Юра',
          surname: 'Последов',
          avatar: '',
        },
        {
          id: '2',
          name: 'Сергей',
          surname: 'Кондратов',
          avatar: '',
        },
      ];
      const currentId = event.target.id;

      if (requestedUsers.find(user => user.id === currentId))
      {
        setExecutors([]);
      }
      // request for executors
      setExecutors(requestedUsers);
    }

  };
  return (
    <div  className={`${styles.select} ${className}`}>
      <Input onChange={executorSuggest}
        register={register('executor',{ required: 'Необходимо заполнить' })}
        config={executorFieldConfig}
      />
      {executors.length ?
        <div className={styles.popup}>
          {executors.map((executor) =>  <button onClick={selectExecutor} className={styles.option}
            key={executor.id} data-user-id={executor.id}>{`${executor.name} ${executor.surname}`}</button>)}
        </div> : ''
      }
    </div>
  );
};

export default Suggest;
