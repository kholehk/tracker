/* eslint-disable react/prop-types */
import React from 'react';

function Button(props) {
  const { type, style, handleTracker } = props;

  return (
    <button
      className={`button circle ${style.margin}`}
      type={type.isSubmit ? 'submit' : 'button'}
      onClick={(event) => handleTracker && handleTracker(event)}
    >
      <i className={`material-icons icon circle ${style.color}`}>
        {type.icon}
      </i>
    </button>
  );
}

export default Button;
