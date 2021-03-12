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
      localStorage.setItem(action.key, JSON.stringify(trackers));
      return { trackers };
    default:
      return state;
  }
}
