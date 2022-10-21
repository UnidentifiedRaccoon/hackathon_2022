import {TAG_COLORS} from '../../../const';

import styles from './Tag.module.css';

const findColorName = (color) => {
  for (const [key, value] of Object.entries(TAG_COLORS)) {
    if (value === color) return key;
  }
};

const Tag = ({children, className = '', color}) => {
  const colorName = findColorName(color);
  const style = { backgroundColor: color };
  return <span className={`${styles.tag} ${className}`}
    style={style}
    color={color}
    aria-label={colorName}>{children}</span>;
};
export default Tag;
