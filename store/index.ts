import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import reducer from './reducers' ;

export const makeStore = () => {
  return configureStore({
    reducer
  });
}

export const wrapper = createWrapper(makeStore, { debug: true });
