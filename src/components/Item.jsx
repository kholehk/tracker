/* eslint-disable react/prop-types */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { deleteTracker } from '../actions/trackersActions';
import { buttonType } from '../utils/types';
import Button from './Button';

function Item({ dispatch, tracker }) {
  const hasPassed = () => (Date.now() - tracker.start);
  const [time, setTime] = useState(hasPassed());

  useEffect(() => { setTime(hasPassed()); }, [Date.now(), tracker.start]);

  const handlePlayTracker = () => { };

  const handleDeleteTracker = () => {
    dispatch(deleteTracker(tracker));
  };

  return (
    <li className="item">
      <span className="tracker-title">{tracker.title}</span>
      <span className="tracker-time ml-1">
        { moment(time).format('hh:mm:ss') }
      </span>
      <Button
        type={buttonType.pause}
        decoration={{ margin: 'ml-1', color: 'black' }}
        handleTracker={handlePlayTracker}
      />
      <Button
        type={buttonType.remove}
        decoration={{ margin: 'ml-1', color: 'red' }}
        handleTracker={handleDeleteTracker}
      />
    </li>
  );
}

const mapStateToProps = (state) => ({
  trackers: state.trackers.trackers,
});

export default connect(mapStateToProps)(Item);
