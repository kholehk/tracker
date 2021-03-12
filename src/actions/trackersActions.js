const trackersKey = 'MY_LOCAL_TRACKERS';

export const GET_TRACKERS_SUCCESS = 'GET_TRACKERS_SUCCESS';
export const GET_TRACKERS_FAILURE = 'GET_TRACKERS_FAILURE';

export const getTrackersSuccess = (trackers) => ({
  type: GET_TRACKERS_SUCCESS,
  payload: trackers,
});

export const getTrackersFailure = () => ({
  type: GET_TRACKERS_FAILURE,
});

export function parseTrackers() {
  return (dispatch) => {
    try {
      const data = JSON.parse(localStorage.getItem(trackersKey));

      if (!Array.isArray(data)) throw new Error('The trackers must be in an array');
      dispatch(getTrackersSuccess(data));
    } catch (error) {
      dispatch(getTrackersFailure());
    }
  };
}
