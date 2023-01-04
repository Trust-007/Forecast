import { forecastActions } from './forecastSlice';

const apiKey = process.env.REACT_APP_KEY;

const getData = () => async (dispatch) => {
  const sendRequest = async () => {
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%20%09${apiKey}%20&q=Toronto&details=true`,
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
