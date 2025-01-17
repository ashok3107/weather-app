import { type MouseEvent, useCallback } from 'react';
import styles from './Header.module.scss';
import { useAppDispatch } from '../../store';
import { addOrRemoveSelectedCity } from '../../App.actionHandlers';

type CityItemType = {
  id: number;
  name: string;
  isCitySelected: boolean;
};

const CityItem = (props: CityItemType) => {
  const {
    id, name, isCitySelected,
  } = props;
  const dispatch = useAppDispatch();

  const onCityItemClick = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    dispatch(addOrRemoveSelectedCity(id));
  }, [id]);
  return (
    <div className={`${styles.cityItem} ${isCitySelected ? styles.selected : ''}`} onClick={onCityItemClick} role='button' tabIndex={0}>
      <span onClick={onCityItemClick}>{name}</span>
    </div>
  )
};

export default CityItem;