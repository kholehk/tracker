const trackersKey = 'MY_LOCAL_TRACKERS';

export const GET_TRACKERS = 'GET_TRACKERS';
export const POST_TRACKER = 'POST_TRACKER';
export const DEL_TRACKER = 'DEL_TRACKER';

export const getTrackers = (trackers) => ({
  type: GET_TRACKERS,
  payload: trackers,
});

export const postTracker = (tracker) => ({
  type: POST_TRACKER,
  payload: tracker,
  key: trackersKey,
});

export const delTracker = (tracker) => ({
  type: DEL_TRACKER,
  payload: tracker,
  key: trackersKey,
});

export function readTrackers() {
  return (dispatch) => {
    try {
      const data = JSON.parse(localStorage.getItem(trackersKey));

      if (!Array.isArray(data)) throw new Error('The trackers must be in an array');
      dispatch(getTrackers(data));
    } catch (error) {
      localStorage.setItem(trackersKey, '[]');
    }
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
