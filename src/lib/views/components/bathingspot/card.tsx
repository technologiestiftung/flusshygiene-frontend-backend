import React from 'react';
import { RouteNames } from '../../../common/enums';
import { ISpotCard } from '../../../common/interfaces';

export const Card = (props: ISpotCard) => (
  <li className='list__item--bathingspots'>
    <a href={`/${RouteNames.bathingspot}/${props.id}`}>
      <img src='' alt='' className='spot-image'/>
      <img src='' alt='' className='state-image' />
      <span className='spot-title'>{props.title}</span>
      {(() => {
        if (props.hasPrediction === true) {
          return <span className='asteriks'> * </span>;
        }
        return null;
      })()}
      {(() => {
        if (props.hasOwnProperty('water') === true && props.water.length >= 0 && props.water !== props.title) {
          return <span className='spot-water'>{props.water}</span>;
        }
        return null;
      })()
      }
    </a>
  </li>
);
