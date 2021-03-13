/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { readTrackers } from '../actions/trackersActions';

import Item from './Item';

function List({ dispatch, trackers }) {
  const [now, setNow] = useState(Date.now());

  setInterval(() => setNow(Date.now()), 1000);

  useEffect(() => {
    dispatch(readTrackers());
  }, [dispatch]);

  return (
    <ul className="list">
      {trackers.map(
        (tracker, idx) => (<Item idx={idx} now={now} tracker={tracker} key={tracker.start} />),
      )}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  trackers: state.trackers.trackers,
});

export default connect(mapStateToProps)(List);
