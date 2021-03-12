import * as actions from '../actions/trackersActions';

export const initialState = {
  trackers: [],
};

export default function trackersReducer(state = initialState, action) {
  let trackers = [];

  switch (action.type) {
    case actions.GET_TRACKERS:
      return { trackers: action.payload };
    case actions.POST_TRACKER:
      trackers = [action.payload, ...state.trackers];
      break;
    case actions.DEL_TRACKER:
      trackers = state.trackers.filter((tracker) => (tracker.start !== action.payload.start));
      break;
    default:
      return state;
  }

  localStorage.setItem(action.key, JSON.stringify(trackers));
  return { trackers };
}
