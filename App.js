import QuizzScreen from './screens/QuizzScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import React from 'react';

export default function App()
{
  return (
    <Provider store={store}>
      <QuizzScreen />
    </Provider>
  );
}