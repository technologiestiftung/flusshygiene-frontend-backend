import React from 'react';
import { IItem } from '../../../common/interfaces';

export const Card = (props: IItem) => (
  <li>
    <a href={`/bathingspots/${props.str}`}>
      <img src='' alt='' className='spot-image'/>
      <img src='' alt='' className='state-image' />
      <div className='spot-title'>{props.str}</div>
      {(() => {
        if (props.hasOwnProperty('water')) {
          return <div className='spot-water'>water name</div>;
        }
        return null;
      })()
      }
    </a>
  </li>
);
