import React from 'react';
import { IItem } from '../../common/interfaces';

export const Map = (props: IItem) => (
  <div id='map' className='section'>
    <p>{props.str}</p>
  </div>
);
