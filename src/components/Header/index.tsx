import { type MouseEvent, useCallback, useEffect, useState } from 'react';
import { AVAILABLE_CITIES } from '../../constants/AppConstants';
import { useAppDispatch, useAppSelector } from '../../store';
import styles from './Header.module.scss';
import CityItem from './CityItem';
import { getAllWeatherData, setLocalStateToAppStore } from '../../App.actionHandlers';
import PageOverlay from '../PageOverlay';
import IconMap from '../../helpers/IconMap';

const Header = () => {
  const selectedCities = useAppSelector(state => state.app.selectedLocations);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLocalStateToAppStore());
    dispatch(getAllWeatherData());
  }, []);

  const [showCityList, setShowCityList] = useState(false);
  const closeCityList = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    setShowCityList(false);
  }, []);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <h4>
          <img src={IconMap.weather} />
          <span>Weather App</span>
        </h4>
        <div onClick={() => setShowCityList(true)} className={styles.availableCities}>
          <button className={styles.citiesBtn}>Select Cities</button>
          {showCityList && (
            <>
              <PageOverlay onClick={closeCityList} />
              <div className={styles.cityList}>
                {AVAILABLE_CITIES.map(city => (
                  <CityItem {...city} key={city.id} isCitySelected={selectedCities.indexOf(city.id) !== -1} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;