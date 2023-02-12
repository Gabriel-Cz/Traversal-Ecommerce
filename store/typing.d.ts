import { makeStore } from ".";
import { ThunkAction } from '@reduxjs/toolkit';

export type Store = ReturnType<typeof makeStore>;

export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type StoreDispatch<T, P> = (arg: T) => (P);