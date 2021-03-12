import * as actions from '../actions/trackersActions';

export const initialState = {
  trackers: [],
};

export default function trackersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TRACKERS:
      return { trackers: action.payload };
    default:
      return state;
  }
}
