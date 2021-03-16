/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postTracker } from '../actions/trackersActions';
import { buttonType, trackerType } from '../utils/types';
import Button from './Button';

function Form({ dispatch }) {
  const initNewTracker = { ...trackerType };
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
        const title = newTracker.title.trim() || 'No name tracker';
        const start = Date.now();
        dispatch(postTracker({
          ...newTracker, title, start,
        }));
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
        style={{ margin: '', color: 'green' }}
      />
    </form>
  );
}

const mapStateToProps = (state) => ({
  trackers: state.trackersReducer.trackers,
});

export default connect(mapStateToProps)(Form);
