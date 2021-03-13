import * as actions from '../actions/trackersActions';
import { trackerType } from '../utils/types';

export const initialState = {
  trackers: [],
};

export default function trackersReducer(state = initialState, action) {
  let trackers = [];
  const { payload } = action;
  const pushInterval = (tracker) => (
    payload.isPlay
      ? [...tracker.intervals, Date.now() - payload.start]
      : [...tracker.intervals]
  );

  switch (action.type) {
    case actions.GET_TRACKERS:
      trackers = payload.map((tracker) => ({ ...trackerType, ...tracker }));
      break;
    case actions.POST_TRACKER:
      trackers = [payload, ...state.trackers];
      break;
    case actions.DEL_TRACKER:
      trackers = state.trackers.filter((tracker) => (tracker.start !== payload.start));
      break;
    case actions.PAUSE_PLAY_TRACKER:
      trackers = state.trackers.map(
        (tracker) => ((tracker.start === payload.start)
          ? {
            ...tracker,
            isPlay: !payload.isPlay,
            start: Date.now(),
            intervals: pushInterval(payload),
          }
          : tracker),
      );
      break;
    default:
      return state;
  }

  localStorage.setItem(action.storage, JSON.stringify(trackers));
  return { trackers };
}
