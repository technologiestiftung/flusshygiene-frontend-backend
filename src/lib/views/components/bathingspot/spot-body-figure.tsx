import React from 'react';

interface ISpotBodyFigure {
  image: string;
  nameLong: string;
  name: string;
  imageAuthor?: string;
}
export const SpotBodyFigure = (props: ISpotBodyFigure) => (
  <figure className='image is-16by9'>
    <img src={`${props.image}`} alt={`${props.nameLong}`} title={`${props.name}`} />
    <figcaption>Bildquelle: {(() => {
      return props.imageAuthor !== undefined ? `${props.imageAuthor}` : 'Unbekannt';
    })()}</figcaption>
  </figure>
);
