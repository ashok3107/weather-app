import sunriseIcon from '/icons/sunrise.svg?url';
import sunsetIcon from '/icons/sunset.svg?url';
import humidityIcon from '/icons/humidity.svg?url';
import pressureIcon from '/icons/pressure.svg?url';
import minTempIcon from '/icons/minTemp.svg?url';
import maxTempIcon from '/icons/maxTemp.svg?url';
import tempIcon from '/icons/temp.svg?url';
import windIcon from '/icons/wind.svg?url';
import weather from '/icons/weather.svg?url';

type IconMapType = {
  [key: string]: string,
};

const IconMap: IconMapType =  {
  sunriseIcon, sunsetIcon, humidityIcon, pressureIcon, minTempIcon, maxTempIcon, tempIcon, windIcon,
  weather,
};

export default IconMap;
