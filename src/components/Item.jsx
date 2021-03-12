/* eslint-disable react/prop-types */
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';

import { deleteTracker } from '../actions/trackersActions';
import { buttonType } from '../utils/types';
import Button from './Button';

function Item({ dispatch, tracker }) {
  const duration = moment.duration(Date.now() - tracker.start);
  const days = duration.days();
  const hours = 24 * days + duration.hours();
  const tail = moment(duration).format('mm:ss');
  const time = `${hours}:${tail}`;

  const handlePlayTracker = () => { };

  const handleDeleteTracker = () => {
    dispatch(deleteTracker(tracker));
  };

  return (
    <li className="item">
      <span className="tracker-title">{tracker.title}</span>
      <span className="tracker-time ml-1">{time}</span>
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
