import { forecastActions } from './forecastSlice';

const apiKey = process.env.REACT_APP_KEY;

const getData = () => async (dispatch) => {
  const sendRequest = async () => {
    const response = await fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=California&details=true`,
    );
    const data = await response.json();

    dispatch(forecastActions.getForecast(data));
  };
  try {
    await sendRequest();
  } catch (error) {
    throw new Error(error);
  }
};

export default getData;
