import * as actions from '../actions/trackersActions';
import { trackerType } from '../utils/types';

const trackersStorage = 'MY_LOCAL_TRACKERS';

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

  const getTrackers = () => {
    let data = [];

    try {
      data = JSON.parse(localStorage.getItem(trackersStorage)) || [];

      if (!Array.isArray(data)) throw new Error('The trackers create array in local Storage');
    } catch (error) {
      localStorage.setItem(trackersStorage, '[]');
    }

    return data;
  };

  switch (action.type) {
    case actions.GET_TRACKERS:
      trackers = getTrackers().map((tracker) => ({ ...trackerType, ...tracker }));
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

  localStorage.setItem(trackersStorage, JSON.stringify(trackers));
  return { trackers };
}
