import React from 'react';

interface ISpotBodyAddonListItem {
  image: string;
  text: string;
}
export const SpotBodyAddonListItem = (props: ISpotBodyAddonListItem) => (
  <li><img src={`${props.image}`} alt={`${props.text}`}/>{props.text}</li>
);
