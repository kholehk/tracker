const trackersStorage = 'MY_LOCAL_TRACKERS';

export const GET_TRACKERS = 'GET_TRACKERS';
export const POST_TRACKER = 'POST_TRACKER';
export const DEL_TRACKER = 'DEL_TRACKER';
export const PAUSE_PLAY_TRACKER = 'PAUSE_PLAY_TRACKER';

export const getTrackers = (trackers) => ({
  type: GET_TRACKERS,
  payload: trackers,
  storage: trackersStorage,
});

export const postTracker = (tracker) => ({
  type: POST_TRACKER,
  payload: tracker,
  storage: trackersStorage,
});

export const delTracker = (tracker) => ({
  type: DEL_TRACKER,
  payload: tracker,
  storage: trackersStorage,
});

export const pausePlayTracker = (tracker) => ({
  type: PAUSE_PLAY_TRACKER,
  payload: tracker,
  storage: trackersStorage,
});

export function readTrackers() {
  return (dispatch) => {
    let data = [];

    try {
      data = JSON.parse(localStorage.getItem(trackersStorage)) || [];

      if (!Array.isArray(data)) throw new Error('The trackers create array in local Storage');
    } catch (error) {
      localStorage.setItem(trackersStorage, '[]');
    }

    dispatch(getTrackers(data));
  };
}

export function createTracker(tracker) {
  return (dispatch) => {
    dispatch(postTracker(tracker));
  };
}

export function deleteTracker(tracker) {
  return (dispatch) => {
    dispatch(delTracker(tracker));
  };
}

export function pausedPLayingTracker(tracker) {
  return (dispatch) => {
    dispatch(pausePlayTracker(tracker));
  };
}
