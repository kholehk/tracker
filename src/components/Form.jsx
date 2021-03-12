import React, { useState } from 'react';

import { buttonType, decorationType } from '../utils/types';
import Button from './Button';

function Form() {
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
        // add newTracker to Store
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

export default Form;
