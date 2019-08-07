import React from 'react';
import { ISpotHeader } from '../../../common/interfaces/iviews';

export const SpotHeader = (props: ISpotHeader) => (
  <div className='bathingspot__header'>
    <h1>
      {props.nameLong} <span>{props.district}</span>
    </h1>
    {(() => {
      if (props.nameLong !== props.water && props.water !== undefined) {
        return <h2>{props.water}</h2>;
      }
      return null;
    })()}
    <hr />
  </div>
);
