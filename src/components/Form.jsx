import React from 'react';
import { buttonType, decorationType } from '../types';
import Button from './Button';

function Form() {
  const decoration = { ...decorationType };

  return (
    <form
      action="#"
      className="input-group circle"
    >
      <input
        placeholder="Enter tracker name"
        type="text"
        name="new-tracker"
        id="new-tracker"
        className="input circle"
      />
      <Button
        type={buttonType.submit}
        decoration={decoration}
      />
    </form>
  );
}

export default Form;
