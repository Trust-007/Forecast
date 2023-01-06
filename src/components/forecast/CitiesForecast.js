import { useSelector } from 'react-redux';
import CityForecast from './CityForecast';
import classes from './CitiesForecast.module.css';

const CitiesForecast = () => {
  const forecast = useSelector((state) => state.forecast.list);
  const search = useSelector((state) => state.forecast.search);

  let val = forecast;
  if (search !== '') {
    val = forecast.filter((item) => {
      if (
        item.Country.LocalizedName.toLowerCase()
          .split('')
          .slice(0, search.length)
          .join('') === search.toLowerCase()
      ) {
        return item;
      }
      return '';
    });
  }

  const list = val.map((item) => (
    <CityForecast
      key={item.Key}
      id={item.Key}
      city={item.AdministrativeArea.LocalizedName}
      country={item.Country.LocalizedName}
      lat={item.GeoPosition.Latitude}
      long={item.GeoPosition.Longitude}
    />
  ));
  let content;
  if (list.length === 0) {
    content = <p className={classes.no_item}>No items</p>;
  } else {
    content = list;
  }
  return <div className={classes.container}>{content}</div>;
};

export default CitiesForecast;
