import React from 'react';
import { IItem } from '../../common/interfaces';

export const Item = (props: IItem) => (
  <div>
    <p>{props.str}</p>
  </div>
);
