import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { WiDaySunny, WiMoonWaningCrescent3 } from "react-icons/wi";
import classes from "./ForecastDetail.module.css";

const apiKey = process.env.REACT_APP_KEY;
const ForecastDetail = () => {
  const forecast = useSelector((state) => state.forecast);
  const param = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const getForecast = async () => {
      const response = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${param.cityid}?apikey=${apiKey}%20&details=true&metric=true`
      );
      const data = await response.json();
      setData(data);
    };

    getForecast();
  }, [param.cityid]);
  const target = forecast.find((item) => item.Key === param.cityid);
  return (
    <div>
      {target && (
        <h1>{`${target.AdministrativeArea.LocalizedName}, ${target.Country.LocalizedName}`}</h1>
      )}
      {data && (
        <div>
          <h3>{`Category: ${data.Headline.Category}`}</h3>
          <h3>{`Description: ${data.Headline.Text}`}</h3>
          <div>
            <div>
              <div className={classes.logo}>
                <h2>Day</h2>
                <WiDaySunny className={classes.sun} />
              </div>
              <p>{data.DailyForecasts[0].Day.LongPhrase}</p>
              <p>{`Hours of Rain: ${data.DailyForecasts[0].Day.HoursOfRain}`}</p>
              <p>{`Hours of Snow: ${data.DailyForecasts[0].Day.HoursOfSnow}`}</p>
              <p>{`Cloud Cover: ${data.DailyForecasts[0].Day.CloudCover}`}</p>
            </div>
            <div>
              <div className={classes.logo}>
                <h2>Night</h2>
                <WiMoonWaningCrescent3 className={classes.moon} />
              </div>
              <p>{data.DailyForecasts[0].Night.LongPhrase}</p>
              <p>{`Hours of Rain: ${data.DailyForecasts[0].Night.HoursOfRain}`}</p>
              <p>{`Hours of Snow: ${data.DailyForecasts[0].Night.HoursOfSnow}`}</p>
              <p>{`Cloud Cover: ${data.DailyForecasts[0].Night.CloudCover}`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForecastDetail;
