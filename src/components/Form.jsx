/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createTracker } from '../actions/trackersActions';
import { buttonType, decorationType } from '../utils/types';
import Button from './Button';

function Form({ dispatch }) {
  const decoration = { ...decorationType };
  const initNewTracker = { title: '', start: null };
  const [newTracker, setNewTracker] = useState(initNewTracker);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewTracker({ ...newTracker, [name]: value });
  };

  return (
    <form
      action="#"
      className="input-group circle"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(createTracker({ ...newTracker, start: Date.now() }));
        setNewTracker(initNewTracker);
      }}
    >
      <input
        placeholder="Enter tracker name"
        type="text"
        name="title"
        value={newTracker.title}
        id="new-tracker"
        className="input circle"
        onChange={(event) => handleInputChange(event)}
      />
      <Button
        type={buttonType.submit}
        decoration={decoration}
      />
    </form>
  );
}

const mapStateToProps = (state) => ({
  trackers: state.trackers.trackers,
});

export default connect(mapStateToProps)(Form);
