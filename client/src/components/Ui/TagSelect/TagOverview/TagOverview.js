import Tag from '../../Tag/Tag';

import Cross from '../../Cross/Cross';

import styles from './TagOverview.module.css';


const TagOverview = ({className, tagList, setTagList}) => {
  const onDelete = (evt) => {
    const color = evt.target.parentNode.getAttribute('color');
    setTagList(tags => tags.filter(tag => tag !== color));
  };

  const Tags = Boolean(tagList) &&
      tagList.map((tag) =>
        <Tag color={tag} className={styles.overview__tag}  key={`overview-${tag}`}>
          <Cross className={styles.overview__cross} onClick={onDelete}>Удалить тег</Cross>
        </Tag>);
  return <div className={`${styles.overview} ${className}`}>
    {Tags}
  </div>;
};

export default TagOverview;