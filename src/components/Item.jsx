/* eslint-disable react/prop-types */
import moment from 'moment';
import React from 'react';

import { buttonType } from '../utils/types';
import Button from './Button';

function Item(props) {
  const { tracker } = props;
  const { start } = tracker;
  const now = Date.now();
  const duration = now - start;
  const days = moment(duration).days();
  const hours = 24 * days + moment(duration).hours();
  const min = moment(duration).minutes();
  const sec = moment(duration).seconds();
  const time = `${hours}:${min}:${sec}`;

  return (
    <li className="item">
      <span className="tracker-title">{tracker.title}</span>
      <span className="tracker-time ml-1">{time}</span>
      <Button
        type={buttonType.pause}
        decoration={{ margin: 'ml-1', color: 'black' }}
      />
      <Button
        type={buttonType.remove}
        decoration={{ margin: 'ml-1', color: 'red' }}
      />
    </li>
  );
}

export default Item;
