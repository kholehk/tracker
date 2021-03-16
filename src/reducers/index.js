/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';

import trackersReducer from './trackersReducer';

const rootReducer = combineReducers({
  trackersReducer,
});

export default rootReducer;
