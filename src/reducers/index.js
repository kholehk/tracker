import { combineReducers } from 'redux';

import trackersReducer from './trackersReducer';

const rootReducer = combineReducers({
  trackersReducer,
});

export default rootReducer;
