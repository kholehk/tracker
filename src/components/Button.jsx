/* eslint-disable react/prop-types */
import React from 'react';

function Button(props) {
  const { type, decoration, handleTracker } = props;

  return (
    <button
      className={`button circle ${decoration.margin}`}
      type={type.isSubmit ? 'submit' : 'button'}
      onClick={() => handleTracker && handleTracker()}
    >
      <i className={`material-icons icon circle ${decoration.color}`}>
        {type.icon}
      </i>
    </button>
  );
}

export default Button;
