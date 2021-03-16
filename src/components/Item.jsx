/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { deleteTracker, pauseplayTracker } from '../actions/trackersActions';
import { buttonType } from '../utils/types';
import Button from './Button';

momentDurationFormatSetup(moment);

function Item({
  dispatch, idx, now, tracker,
}) {
  const hasPassed = (start) => {
    const prevInterval = tracker.intervals.reduce((acc, cur) => (acc + cur), 0);
    return tracker.isPlay ? (Date.now() - start + prevInterval) : prevInterval;
  };
  const [time, setTime] = useState(hasPassed(tracker.start));
  const [pauseplayButton, setPauseplayButton] = useState(buttonType.pause);

  useEffect(() => setTime(hasPassed(tracker.start)), [now]);

  useEffect(
    () => setPauseplayButton(tracker.isPlay ? buttonType.pause : buttonType.play),
    [tracker],
  );

  const handlePausePlayTracker = () => {
    dispatch(pauseplayTracker(tracker));
  };

  const handleDeleteTracker = () => {
    dispatch(deleteTracker(tracker));
  };

  return (
    <li className="item">
      <span className="tracker-title">{`#${idx + 1} ${tracker.title}`}</span>
      <span className="tracker-time ml-1">
        {
          moment.duration(time).format('h:mm:ss')
        }
      </span>
      <Button
        type={pauseplayButton}
        style={{ margin: 'ml-1', color: 'black' }}
        handleTracker={handlePausePlayTracker}
      />
      <Button
        type={buttonType.remove}
        style={{ margin: 'ml-1', color: 'red' }}
        handleTracker={handleDeleteTracker}
      />
    </li>
  );
}

const mapStateToProps = (state) => ({
  trackers: state.trackersReducer.trackers,
});

export default connect(mapStateToProps)(Item);
