import * as actions from '../actions/trackersActions';

export const initialState = {
  trackers: [],
  hasErrors: false,
};

export default function trackersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TRACKERS_SUCCESS:
      return { trackers: action.payload, hasErrors: false };
    case actions.GET_TRACKERS_FAILURE:
      return { ...state, hasErrors: true };
    default:
      return state;
  }
}
