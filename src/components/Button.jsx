/* eslint-disable react/prop-types */
import React from 'react';

function Button({
  type, style, handleTracker,
}) {
  const { margin, color } = style;
  const { isSubmit, icon } = type;

  return (
    <button
      className={`button circle ${margin}`}
      type={isSubmit ? 'submit' : 'button'}
      onClick={(event) => handleTracker && handleTracker(event)}
    >
      <i className={`material-icons icon circle ${color}`}>
        {icon}
      </i>
    </button>
  );
}

export default Button;
