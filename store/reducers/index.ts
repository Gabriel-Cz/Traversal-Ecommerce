import { combineReducers, AnyAction } from '@reduxjs/toolkit';
import productsReducer from './productsReducer';

const combinedReducers = combineReducers({
  productsReducer,
});

const reducer = (state: ReturnType<typeof combinedReducers>, action: AnyAction) => {
  if (action.type === 'HYDRATE') {
    const nextState = {
      ...state,
      ...action.payload
    };
    return nextState;
  } else {
    return combinedReducers(state, action);
  }
}

export default reducer;