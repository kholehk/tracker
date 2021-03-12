/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';

function List({ trackers }) {
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
  hasErrors: state.trackers.hasErrors,
});

export default connect(mapStateToProps)(List);
