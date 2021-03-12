import React from 'react';
import { buttonType } from '../types';
import Button from './Button';

function List() {
  return (
    <ul className="list">
      <li className="item">
        <span className="tracker-title">Lorem, ipsum dolor.</span>
        <span className="tracker-time ml-1">01:15:56</span>
        <Button
          type={buttonType.pause}
          decoration={{ margin: 'ml-1', color: 'black' }}
        />
        <Button
          type={buttonType.remove}
          decoration={{ margin: 'ml-1', color: 'red' }}
        />
      </li>
      <li className="item">
        <span className="tracker-title">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
        <span className="tracker-time ml-1">100:25:15</span>
        <Button
          type={buttonType.play}
          decoration={{ margin: 'ml-1', color: 'black' }}
        />
        <Button
          type={buttonType.remove}
          decoration={{ margin: 'ml-1', color: 'red' }}
        />
      </li>
    </ul>
  );
}

export default List;
