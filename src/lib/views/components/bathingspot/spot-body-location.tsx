import React from 'react';
import { ISpotBodyLocation } from '../../../common/interfaces';

export const SpotBodyLocation = (props: ISpotBodyLocation) => {
  return (
    <div className='bathingspot__body-location'>
      <h3>Anschrift</h3>
          <p>{props.nameLong}</p>
          <p>{props.street}</p>
          <p>{props.postalCode} {props.city}</p>
          {(() => {
            if (props.website.length > 0) {
              // const reg = /^(http|https?)\:\/\//g;
              return (<p>
                <a href={`${props.website}`}>{props.website.replace(/^https?\:\/\//g, '').replace(/\/$/, '')}</a>
                </p>);
            }
            return null;
          })()}
          <p>
            <a href={`https://maps.google.com/maps?daddr=${props.longitude},${props.latitude}`}>Route Berechnen</a>
          </p>
    </div>
  );
};
