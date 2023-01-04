import { useSelector } from "react-redux";
import CityForecast from "./CityForecast";
import classes from "./CitiesForecast.module.css";

const CitiesForecast = () => {
  const forecast = useSelector((state) => state.forecast);
  const list = forecast.map((item) => {
    return (
      <CityForecast
        key={item.Key}
        id={item.Key}
        city={item.AdministrativeArea.LocalizedName}
        lat={item.GeoPosition.Latitude}
        long={item.GeoPosition.Longitude}
      />
    );
  });
  let content;
  if (list.length === 0) {
    content = <p>No items</p>;
  } else {
    content = list;
  }
  return <div className={classes.container}>{content}</div>;
};

export default CitiesForecast;
