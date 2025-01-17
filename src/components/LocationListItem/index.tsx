import { getFormattedTimeFromEpoch, getWeatherIcon, isSameLocation } from '../../helpers/App.helper';
import InfoCard from '../InfoCard';
import styles from './LocationListItem.module.scss';

export type LocationItemType = {
  name: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  feelsLikeTemp: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  country: string;
  sunrise: number;
  sunset: number;
  icon: string;
  lon: number;
  lat: number;
  description: string;
  timezone: number;
  id: number;
};

const LocationListItem = (props: LocationItemType) => {
  const {
    name, temp, tempMin, tempMax, feelsLikeTemp, windSpeed, country,
    sunrise, sunset, icon, description, timezone, lat, lon,
  } = props;
  return (
    <div className={styles.listItemContainer}>
      <div className={styles.weatherMain}>
        <img src={getWeatherIcon(icon)} />
        <span className={styles.desc}>{description}</span>
        <span className={styles.temp}>{temp}<sup>o</sup>F</span>
        <h4>
          <div>{name}</div>
          <span>{country}</span>
          {isSameLocation(lat, lon) && <span className={styles.myLoc}>My Location</span>}
        </h4>
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.extraInfo}>
        <div className={styles.infoCards}>
          <InfoCard title='Feels Like' value={feelsLikeTemp} unit={<><sup>o</sup>F</>} icon="tempIcon" />
          <InfoCard title='Wind' value={windSpeed} unit="m/s" icon="windIcon" />
          <InfoCard title='Temp Min.' value={tempMin} unit={<><sup>o</sup>F</>} icon="minTempIcon" />
          <InfoCard title='Temp Max.' value={tempMax} unit={<><sup>o</sup>F</>} icon="maxTempIcon" />
          <InfoCard title='Sunrise' value={getFormattedTimeFromEpoch(sunrise, timezone)} unit="" icon="sunriseIcon" />
          <InfoCard title='Sunset' value={getFormattedTimeFromEpoch(sunset, timezone)} unit="" icon="sunsetIcon" />
        </div>
      </div>
    </div>
  );
};

export default LocationListItem;