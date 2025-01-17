import { type ReactNode } from 'react';
import IconMap from '../../helpers/IconMap';
import styles from './InfoCard.module.scss';

type InforCardType = {
  title: string;
  value: number | string;
  unit: ReactNode;
  icon: string;
};

const InfoCard = (props: InforCardType) => {
  const { title, value, unit, icon } = props;
  return (
    <div className={styles.infoCard}>
      <div className={styles.details}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.valueContainer}>
          <span>{value}</span>
          <span>{unit}</span>
        </div>
      </div>
      <img src={IconMap[icon]} alt={`${title}_icon`} />
    </div>
  )
};

export default InfoCard;

