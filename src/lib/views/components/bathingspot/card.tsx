import React from 'react';
import { RouteNames } from '../../../common/enums';
import { ISpotCard } from '../../../common/interfaces';

export const Card = (props: ISpotCard) => (
  <li className='index__bathingspot-list-item'>
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
        if (props.hasOwnProperty('water') === true) {
          if(props.water !== null){
            if(props.water.length >= 0 && props.water !== props.title){
              return <span className='spot-water'>{props.water}</span>;
            }
          }
        }
        return null;
      })()
      }
    </a>
  </li>
);
