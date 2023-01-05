import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BsFillCloudMoonFill,
  BsFillCloudSunFill,
  BsFillSunFill,
  BsMoonFill,
  BsCloudSnowFill,
  BsCloudRainHeavyFill,
} from 'react-icons/bs';
import classes from './ForecastDetail.module.css';

const apiKey = process.env.REACT_APP_KEY;
const ForecastDetail = () => {
  const forecast = useSelector((state) => state.forecast.list);
  const param = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const getForecast = async () => {
      const response = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${param.cityid}?apikey=${apiKey}%20&details=true&metric=true`,
      );
      const data = await response.json();
      setData(data);
    };

    getForecast();
  }, [param.cityid]);
  const target = forecast.find((item) => item.Key === param.cityid);
  return (
    <div className={classes.contain}>
      {target && (
        <h1>{`${target.AdministrativeArea.LocalizedName}, ${target.Country.LocalizedName}`}</h1>
      )}
      {data && (
        <div>
          <h3>{`Category: ${data.Headline.Category}`}</h3>
          <h3>{`Description: ${data.Headline.Text}`}</h3>
          <div className={classes.day_night}>
            <div className={classes.day}>
              <div className={classes.logo}>
                <h2>Day</h2>
                <BsFillSunFill className={classes.sun} />
              </div>
              <p>{data.DailyForecasts[0].Day.LongPhrase}</p>
              <p>
                Hours of Rain
                {' '}
                <BsCloudRainHeavyFill />
                :
                {' '}
                {data.DailyForecasts[0].Day.HoursOfRain}
              </p>
              <p>
                Hours of Snow
                {' '}
                <BsCloudSnowFill />
                :
                {' '}
                {data.DailyForecasts[0].Day.HoursOfSnow}
              </p>
              <p>
                Cloud Cover
                {' '}
                <BsFillCloudSunFill />
                :
                {' '}
                {data.DailyForecasts[0].Day.CloudCover}
              </p>
            </div>
            <div className={classes.night}>
              <div className={classes.logo}>
                <h2>Night</h2>
                <BsMoonFill className={classes.moon} />
              </div>
              <p>{data.DailyForecasts[0].Night.LongPhrase}</p>
              <p>
                Hours of Rain
                {' '}
                <BsCloudRainHeavyFill />
                :
                {' '}
                {data.DailyForecasts[0].Night.HoursOfRain}
              </p>
              <p>
                Hours of Snow
                {' '}
                <BsCloudSnowFill />
                :
                {' '}
                {data.DailyForecasts[0].Night.HoursOfSnow}
              </p>
              <p>
                Cloud Cover
                {' '}
                <BsFillCloudMoonFill />
                :
                {' '}
                {data.DailyForecasts[0].Day.CloudCover}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForecastDetail;
