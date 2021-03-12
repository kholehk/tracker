/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { readTrackers } from '../actions/trackersActions';

import Item from './Item';

function List({ dispatch, trackers }) {
  useEffect(() => {
    dispatch(readTrackers());
  }, [dispatch]);

  return (
    <ul className="list">
      {trackers.map(
        (tracker) => (<Item tracker={tracker} key={tracker.start} />),
      )}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  trackers: state.trackers.trackers,
});

export default connect(mapStateToProps)(List);
