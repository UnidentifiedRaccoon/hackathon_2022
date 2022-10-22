import {useState } from 'react';

import {TAG_COLORS} from '../../../../const';


import Tag from '../../Tag/Tag';

import Checkbox from '../../Checkbox/Checkbox';

import styles from './Multiselect.module.css';

const Multiselect = ({className = '', tagList, setTagList}) => {
  const onChange = (evt) => {
    const color = evt.target.name;
    if (evt.target.checked) setTagList(tags =>  [...tags, color]);
    else setTagList(tags => tags.filter(tag => tag !== color) );
  };

  const [isOpen, setIsOpen] = useState(false);
  const TagOptions = Object.values(TAG_COLORS).map((color) =>
    <div key={`select-${color}`} className={styles.multiselect__item}>
      <Checkbox checked={tagList.includes(color)}
        className={styles.multiselect__option}
        onChange={onChange}
        name={color}>
        <Tag className={styles.multiselect__tag} color={color}/>
      </Checkbox>
    </div>
  );

  return (
    <div className={`${styles.multiselect} ${className}`}>
      <button  type="button" className={styles.multiselect__btn}
        onClick={() => setIsOpen((state) => !state)}>
            Выбрать тег
      </button>
      <div className={`${styles.multiselect__box} ${isOpen ? styles.multiselect__box_opened: ''}`}>
        <div className={styles.multiselect__scroll}>
          {TagOptions}
        </div>
      </div>
    </div>
  )

  ;
};
export default Multiselect;
