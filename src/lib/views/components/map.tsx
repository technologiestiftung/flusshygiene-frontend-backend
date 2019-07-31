import React from 'react';
import { IItem } from '../../common/interfaces';

export const Map = (props: IItem) => (
  <section>

  <div id='map--container' className='section'>
    <div id='map'></div>
    <canvas id='deck-canvas'></canvas>
  </div>
  </section>
);
