/* eslint-disable linebreak-style */
export const GET_TRACKERS = 'GET_TRACKERS';
export const POST_TRACKER = 'POST_TRACKER';
export const DEL_TRACKER = 'DEL_TRACKER';
export const PAUSE_PLAY_TRACKER = 'PAUSE_PLAY_TRACKER';

export const getTrackers = () => ({
  type: GET_TRACKERS,
});

export const postTracker = (tracker) => ({
  type: POST_TRACKER,
  payload: tracker,
});

export const deleteTracker = (tracker) => ({
  type: DEL_TRACKER,
  payload: tracker,
});

export const pauseplayTracker = (tracker) => ({
  type: PAUSE_PLAY_TRACKER,
  payload: tracker,
});
