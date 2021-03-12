import React from 'react';
import trackers from '../utils/trackers';
import Item from './Item';

function List() {
  return (
    <ul className="list">
      {trackers.map(
        (tracker) => (<Item tracker={tracker} key={tracker.start} />),
      )}
    </ul>
  );
}

export default List;
