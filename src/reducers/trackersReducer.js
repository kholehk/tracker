import * as actions from '../actions/trackersActions';

export const initialState = {
  trackers: [],
};

export default function trackersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TRACKERS:
      return { trackers: action.payload };
    case actions.POST_TRACKER:

      return { trackers: [action.payload, ...state.trackers] };
    default:
      return state;
  }
}
