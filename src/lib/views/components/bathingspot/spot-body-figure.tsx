import React from 'react';
import { ISpotBodyFigure } from '../../../common/interfaces/iviews';

export const SpotBodyFigure = (props: ISpotBodyFigure) => (
  <figure className='image is-16by9'>
    <img
      src={(() => {
        if (props.image === null) {
          return 'http://placekitten.com/1080/540';
        } else {
          return props.image;
        }
      })()}
      alt={`${props.nameLong}`}
      title={`${props.name}`}
    />
    <figcaption>
      Bildquelle:{' '}
      {(() => {
        return props.imageAuthor !== undefined
          ? `${props.imageAuthor}`
          : 'Unbekannt';
      })()}
    </figcaption>
  </figure>
);
