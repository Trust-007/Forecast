import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import getData from '../store/forecast/actionThunk';

import CitiesForecast from '../components/forecast/CitiesForecast';
import Layout from '../components/layout/Layout';

describe('display the citie in the page', () => {
  it('should display all the cities', () => {
    const { container } = render(
      <Provider store={store}>
        <CitiesForecast />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});

describe('should show the navigation', () => {
  it('full app rendering/navigating', async () => {
    render(
      <Provider store={store}>
        <Layout />
      </Provider>,
      { wrapper: BrowserRouter },
    );
    expect(screen.queryByText(/Canada/)).toMatchSnapshot();
  });
});

describe('Forecast reducers', () => {
  jest.setTimeout(30000);
  it('should fetch items ', async () => {
    await store.dispatch(getData());
    expect(store.getState().forecast.list.length).toEqual(14);
  });
  it('should be an empty string', () => {
    expect(store.getState().forecast.search).toBe('');
  });
});
