import { Link } from "react-router-dom";
import classes from "./CityForecast.module.css";

const CityForecast = (props) => {
  const { id, city, lat, long } = props;
  return (
    <Link to={`/home/${id}`} className={classes.card}>
      <div className={classes.city}>{city}</div>
      <div className={classes.cood}>
        <div>{`Latitude: ${lat}`}</div>
        <div>{`Longitude: ${long}`}</div>
      </div>
    </Link>
  );
};

export default CityForecast;
