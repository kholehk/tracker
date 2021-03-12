import { combineReducers } from 'redux';

import trackersReducer from './trackersReducer';

const rootReducer = combineReducers({
  trackers: trackersReducer,
});

export default rootReducer;
