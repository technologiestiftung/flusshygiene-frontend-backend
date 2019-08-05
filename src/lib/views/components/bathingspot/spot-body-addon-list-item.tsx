import React from 'react';
import { ISpotBodyAddonListItem } from '../../../common/interfaces/iviews';

export const SpotBodyAddonListItem = (props: ISpotBodyAddonListItem) => (
  <li><img src={`${props.image}`} alt={`${props.text}`}/>{props.text}</li>
);
