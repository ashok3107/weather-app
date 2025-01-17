import styles from './LocationList.module.scss';
import { useAppSelector } from '../../store';
import LocationListItem, { LocationItemType } from '../LocationListItem';
import FullPageLoader from '../FullPageLoader';


const LocationList = () => {
  const weatherReport = useAppSelector(state => state.app.weatherReport);
  const loader = useAppSelector(state => state.app.loader);
  return (
    <div className={styles.locationList}>
      {loader ? <FullPageLoader /> : (
        weatherReport.length ? weatherReport.map((weatherItem: LocationItemType) => <LocationListItem key={weatherItem.id} {...weatherItem} />) : (
          <span>No cities selected. Please choose cities from "Select Cities" button in the header.</span>
        )
      )}
      
    </div>
  )
};

export default LocationList;