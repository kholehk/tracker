const trackersKey = 'MY_LOCAL_TRACKERS';

export const GET_TRACKERS = 'GET_TRACKERS';

export const getTrackers = (trackers) => ({
  type: GET_TRACKERS,
  payload: trackers,
});

export function parseTrackers() {
  return (dispatch) => {
    try {
      const data = JSON.parse(localStorage.getItem(trackersKey));

      if (!Array.isArray(data)) throw new Error('The trackers must be in an array');
      dispatch(getTrackers(data));
    } catch (error) {
      localStorage.setItem(trackersKey, '[]');
      console.error(error);
    }
  };
}
