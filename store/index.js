import { createStore, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
 
const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
  }

export const store = context => createStore(reducers, bindMiddleware([thunkMiddleware]))

export const wrapper = createWrapper(store, {debug: true});
