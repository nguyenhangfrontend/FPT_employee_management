
import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
const logger = createLogger()
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [logger]
})

export default store;
